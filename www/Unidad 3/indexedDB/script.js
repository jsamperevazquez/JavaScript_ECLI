/**
 * Conexión global á base de datos IndexedDB.
 * @type {IDBDatabase|null}
 */
let db;

/**
 * Solicitude para abrir ou crear a base de datos "TendaDB".
 * @type {IDBOpenDBRequest}
 */
const request = indexedDB.open("TendaDB", 1);

/**
 * Manexa os erros ao intentar abrir a base de datos.
 * @param {Event} event - Evento de erro.
 */
request.onerror = function (event) {
    console.error("Erro ao abrir a base de datos:", event.target.errorCode);
};

/**
 * Evento que se dispara cando se crea ou actualiza a base de datos.
 * Úsase para definir o esquema (objectStore, índices, etc.).
 * @param {IDBVersionChangeEvent} event
 */
request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Creamos o objectStore "produtos"
    const objectStore = db.createObjectStore("produtos", {
        keyPath: "id",
        autoIncrement: true
    });

    // Creamos índices para buscar por nome, prezo e cantidade
    objectStore.createIndex("nome", "nome", { unique: false });
    objectStore.createIndex("prezo", "prezo", { unique: false });
    objectStore.createIndex("cantidade", "cantidade", { unique: false });
};

/**
 * Evento que indica que a base de datos se abriu correctamente.
 * @param {Event} event
 */
request.onsuccess = function (event) {
    db = event.target.result;
    mostrarProductos();
};

// ─────────────────────────────────────────────────────────────────────────────
// FORMULARIO: Engadir Produto
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Evento que xestiona o envío do formulario para engadir un produto.
 */
document.getElementById("produtoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeProduto").value;
    const prezo = parseFloat(document.getElementById("prezoProduto").value);
    const cantidade = parseInt(document.getElementById("cantidadeProduto").value);

    const novoProduto = { nome, prezo, cantidade };

    engadirProduto(novoProduto);
    document.getElementById("produtoForm").reset();
});

/**
 * Engade un novo produto á base de datos.
 * @param {{nome: string, prezo: number, cantidade: number}} produto - Obxecto produto a engadir.
 */
function engadirProduto(produto) {
    const transaction = db.transaction(["produtos"], "readwrite");
    const objectStore = transaction.objectStore("produtos");

    const request = objectStore.add(produto);

    /**
     * Evento: Produto engadido correctamente.
     */
    request.onsuccess = function () {
        console.log("Produto engadido con éxito:", produto);
        mostrarProductos();
    };

    /**
     * Evento: Erro ao engadir o produto.
     */
    request.onerror = function (event) {
        console.error("Erro ao engadir o produto:", event.target.error);
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// MOSTRAR PRODUCTOS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Lee todos os produtos da base de datos e móstraos na táboa HTML.
 */
function mostrarProductos() {
    const listaProductos = document.getElementById('listaProdutos');
    listaProductos.innerHTML = "";

    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");

    objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;

        if (cursor) {
            const produto = cursor.value;

            // Crear fila da táboa
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.prezo}</td>
                <td>${produto.cantidade}</td>
                <td>
                    <button onclick="editarProduto(${produto.id})">Editar</button>
                    <button onclick="eliminarProduto(${produto.id})">Eliminar</button>
                </td>
            `;

            listaProductos.appendChild(fila);
            cursor.continue();
        } else {
            console.log("Todos os produtos foron mostrados");
        }
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// ELIMINAR PRODUCTO
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Elimina un produto da base de datos polo seu ID.
 * @param {number} id - Identificador do produto a eliminar.
 */
function eliminarProduto(id) {
    const transaction = db.transaction(["produtos"], "readwrite");
    const objectStore = transaction.objectStore("produtos");

    const request = objectStore.delete(id);

    request.onsuccess = function () {
        console.log("Produto eliminado correctamente");
        mostrarProductos();
    };

    request.onerror = function (event) {
        console.error("Erro ao eliminar o produto:", event.target.error);
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// EDITAR PRODUCTO
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Busca un produto polo ID e crea un formulario de edición.
 * @param {number} id - Identificador do produto a editar.
 */
function editarProduto(id) {

    // Eliminar formulario previo se existe
    const formAnterior = document.getElementById("formPd");
    if (formAnterior) formAnterior.remove();

    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.get(id);

    request.onsuccess = function (event) {
        const produto = event.target.result;

        // Crear formulario dinámico
        const form = document.createElement("form");
        form.id = "formPd";

        let inputNome = document.createElement("input");
        inputNome.value = produto.nome;

        let inputCantidade = document.createElement("input");
        inputCantidade.value = produto.cantidade;

        let inputPrezo = document.createElement("input");
        inputPrezo.value = produto.prezo;

        const boton = document.createElement("button");
        boton.setAttribute('type', 'submit');
        boton.textContent = "Modificar";

        // Engadir elementos ao formulario
        form.appendChild(inputNome);
        form.appendChild(inputPrezo);
        form.appendChild(inputCantidade);
        form.appendChild(boton);

        document.body.appendChild(form);

        /**
         * Evento que modifica o produto na base de datos.
         */
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const produtoActualizado = {
                id: produto.id,
                nome: inputNome.value,
                prezo: parseFloat(inputPrezo.value),
                cantidade: parseInt(inputCantidade.value)
            };

            const tx = db.transaction(["produtos"], "readwrite");
            const store2 = tx.objectStore("produtos");

            const updateReq = store2.put(produtoActualizado);

            updateReq.onsuccess = function () {
                console.log("Produto actualizado", produtoActualizado);
                form.remove();
                mostrarProductos();
            };

            updateReq.onerror = function (event) {
                console.error("Erro ao modificar o produto:", event.target.error);
            };
        });
    };
}
