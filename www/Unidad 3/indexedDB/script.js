let db;
// Abrir ou crear a base de datos "TendaDB"
const request = indexedDB.open("TendaDB", 1);
// Xestionar erros ao abrir a base de datos
request.onerror = function (event) {
    console.error("Erro ao abrir a base de datos:",
        event.target.errorCode);
};
// Configurar o esquema da base de datos
request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("produtos", {
        keyPath: "id",
        autoIncrement: true
    });
    objectStore.createIndex("nome", "nome", {unique: false});
    objectStore.createIndex("prezo", "prezo", {unique: false});
    objectStore.createIndex("cantidade", "cantidade", {unique: false});
};
// Abrir a base de datos con éxito
request.onsuccess = function (event) {
    db = event.target.result;
    // TODO: Chamade aquí á función para mostrar produtos ao cargar a páxina
    mostrarProductos();

};
// Engadir novo produto
document.getElementById("produtoForm").addEventListener("submit",
    function (event) {
        event.preventDefault();
        const nome = document.getElementById("nomeProduto").value;
        const prezo =
            parseFloat(document.getElementById("prezoProduto").value);
        const cantidade =
            parseInt(document.getElementById("cantidadeProduto").value);
        const novoProduto = {nome, prezo, cantidade};
        engadirProduto(novoProduto);
        // Limpar o formulario
        document.getElementById("produtoForm").reset();
    });

function engadirProduto(produto) {
    const transaction = db.transaction(["produtos"], "readwrite");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.add(produto);
    request.onsuccess = function () {
        console.log("Produto engadido con éxito:", produto);
        mostrarProductos();
    };
    request.onerror = function (event) {
        console.error("Erro ao engadir o produto:", event.target.error);
    };
}
function mostrarProductos() {
    const listaProductos = document.getElementById('listaProdutos'); // Recuperamos a lista do index
    listaProductos.innerHTML = ""; // Limpamos a lista de productos

    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");

    objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
            const produto = cursor.value;
            // Crear fila da táboa
            const fila = document.createElement("tr");

            // Creo cada una das celdas da fila
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

            listaProductos.appendChild(fila); // Engado a fila a lista de productos
            cursor.continue(); // Continua o cursor
        }else {
            console.log("Todos os produtos foron mostrados");
        }
    };
}


// TODO: Crear a función para eliminar un produto por ID
// TODO: Crear a función para editar un produto por ID