/**
 * ---------------------------------------------------------------------
 *   GESTIÓN DE CLIENTES CON indexedDB — CRUD COMPLETO
 *   Base de datos: TendaDB
 *   ObjectStore: clientes
 *   Autor: José Ángel
 *   Descripción: Funciones para crear, leer, actualizar y eliminar
 *                clientes usando indexedDB con interfaz HTML dinámica.
 * ---------------------------------------------------------------------
 */

/**
 * Instancia global da base de datos IndexedDB.
 * @type {IDBDatabase|null}
 */
let db;

/**
 * Abre a base de datos "TendaDB" ca versión 2.
 * Se a versión cambia,  ejecutase onupgradeneeded pra crear stores/índices.
 * @type {IDBOpenDBRequest}
 */
const request = indexedDB.open('TendaDB', 2);

/**
 * Evento de error o abrir a base de datos.
 * @param {Event} event
 */
request.onerror = function (event) {
    console.error('Erro ao abrir a base de datos', event.target.errorCode);
};

/**
 * Ejecútase cando a versión da base de datos cambia.
 * Crease o objectStore "clientes" e os seus índices.
 * @param {IDBVersionChangeEvent} event
 */
request.onupgradeneeded = function (event) {
    db = event.target.result;

    const objectStore = db.createObjectStore('clientes', {
        keyPath: 'id',
        autoIncrement: true
    });

    objectStore.createIndex('nome', 'nome', {unique: false});
    objectStore.createIndex('email', 'email', {unique: true});
    objectStore.createIndex('telefono', 'telefono', {unique: false});
    objectStore.createIndex('idade', 'idade', {unique: false});
};

/**
 * Evento de éxito o abrir a base de datos.
 * @param {Event} event
 */
request.onsuccess = function (event) {
    db = event.target.result;
    mostrarClientes();
};

// Xestión do formulario de creación de clientes
document.getElementById('clienteForm').addEventListener('submit', function (event) {
 event.preventDefault();
 const nome = document.getElementById('nome').value;
 const email = document.getElementById('email').value;
 const telefono = parseInt(document.getElementById('telefono').value);
 const idade = parseInt(document.getElementById('idade').value);
 
 const novoCliente = {
 nome, email, telefono, idade
 };
 
 
 engadirCliente(novoCliente);
 
 // Reseteo o formulario despois de crear o cliente
 document.getElementById('clienteForm').reset();
 
 })


/**
 * Engade un novo cliente ao ObjectStore "clientes".
 * @param {{nome: string, email: string, telefono: number, idade: number}} cliente
 */
function engadirCliente(cliente) {
    const tx = db.transaction(["clientes"], "readwrite");
    const objectStore = tx.objectStore('clientes');
    const request = objectStore.add(cliente);

    request.onsuccess = function () {
        mostrarClientes();
        console.log(`Cliente ${cliente.nome} engadido correctamente`);
    };

    request.onerror = function (event) {
        console.error('Erro ao engadir o cliente', event.target.error);
    };
}

/**
 * Mostra todos os clientes almacenados na taboa HTML.
 * Crea dinámicamente a taboa con <thead> e <tbody>.
 */
function mostrarClientes() {
    const div = document.getElementById('listaClientes');
    div.innerHTML = "";

    const table = document.createElement('table');
    table.id = 'clientesTable';

    const thead = document.createElement('thead');
    const filaHead = document.createElement('tr');
    const cabeceras = ['ID', 'Nome', 'Email', 'Teléfono', 'Idade', 'Accións'];

    cabeceras.forEach(c => {
        const th = document.createElement('th');
        th.textContent = c;
        filaHead.appendChild(th);
    });

    thead.appendChild(filaHead);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const tx = db.transaction(['clientes'], 'readonly');
    const objectStore = tx.objectStore('clientes');

    objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;

        if (cursor) {
            const cliente = cursor.value;
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td data-label="ID">${cliente.id}</td>
                <td data-label="Nome">${cliente.nome}</td>
                <td data-label="Email">${cliente.email}</td>
                <td data-label="Teléfono">${cliente.telefono}</td>
                <td data-label="Idade">${cliente.idade}</td>
                <td data-label="Accións">
                    <button class="edit-btn" onclick="confirmarAccion('editar', ${cliente.id})">✏ Editar</button>
                    <button class="delete-btn" onclick="confirmarAccion('borrar', ${cliente.id})">🗑 Borrar</button>
                </td>
            `;

            tbody.appendChild(fila);
            cursor.continue();
        }
    };

    table.appendChild(tbody);
    div.appendChild(table);
}

/**
 * Carga nun formulario os datos do cliente e permite modificalos.
 * @param {number} idCliente - ID do cliente a editar.
 */
function editarCliente(idCliente) {
    const formAnterior = document.getElementById('formMod');
    if (formAnterior) formAnterior.remove();

    const tx = db.transaction(["clientes"], "readonly");
    const objectStore = tx.objectStore('clientes');
    const request = objectStore.get(idCliente);

    request.onsuccess = function (event) {
        document.getElementById('clienteForm').hidden = true;
        const cliente = event.target.result;
        const formMod = document.createElement('form');
        formMod.id = 'formMod';
        const inputNome = document.createElement('input');
        inputNome.id = 'actNome';
        const inputEmail = document.createElement('input');
        inputEmail.id = 'actEmail';
        const inputTelefono = document.createElement('input');
        inputTelefono.id = 'actTelefono';
        const inputIdade = document.createElement('input');
        inputIdade.id = 'actIdade';
        const botonActualizar = document.createElement('button');
        botonActualizar.type = 'submit';
        botonActualizar.className = 'fa-solid fa-plus';
        botonActualizar.id = 'editar';
        botonActualizar.textContent = 'Actualizar';
        formMod.appendChild(inputNome);
        formMod.appendChild(inputEmail);
        formMod.appendChild(inputTelefono);
        formMod.appendChild(inputIdade);
        formMod.appendChild(botonActualizar);
        inputNome.value = cliente.nome;
        inputEmail.value = cliente.email;
        inputTelefono.value = cliente.telefono;
        inputIdade.value = cliente.idade;
        document.querySelector('.app-container').appendChild(formMod);
        // Scroll instantáneo al final
        window.scrollTo(0, document.body.scrollHeight);
        document.getElementById('formMod').addEventListener(
            'submit', e => {
                e.preventDefault();
                const novoCliente = {
                    id: cliente.id,
                    nome: inputNome.value,
                    email: inputEmail.value,
                    telefono: inputTelefono.value,
                    idade: inputIdade.value
                }
                const transaction = db.transaction(["clientes"], "readwrite");
                const obj = transaction.objectStore('clientes');
                const request = obj.put(novoCliente);
                request.onsuccess = function (event) {
                    console.log( `Cliente ${novoCliente.nome}actualizado correctamente`);
                    document.getElementById('clienteForm').hidden = false;
                    formMod.remove();
                    mostrarClientes();
                }
                request.onerror = function (event) {
                    console.error('Erro ao enviar o cliente', event.target.error);
                }
            });
    };
}

/**
 * Elimina un cliente según o seu ID do ObjectStore.
 * @param {number} idCliente - ID do cliente a borrar.
 */
function borrarCliente(idCliente) {
    const tx = db.transaction(["clientes"], "readwrite");
    const objectStore = tx.objectStore('clientes');
    const request = objectStore.delete(idCliente);

    request.onsuccess = function () {
        console.log('Cliente eliminado correctamente');
        mostrarClientes();
    };

    request.onerror = function (event) {
        console.error('Erro ao eliminar o cliente', event.target.error);
    };
}

/**
 * Mostra un confirm() según a acción e executa borrar ou editar.
 * @param {"borrar"|"editar"} tipo - Tipo de acción.
 * @param {number} idCliente - ID do cliente sobre o que se actúa.
 */
function confirmarAccion(tipo, idCliente) {
    if (tipo === 'borrar') {
        if (confirm("Seguro que desexas borrar este cliente?")) borrarCliente(idCliente);
    } else if (tipo === 'editar') {
        if (confirm("Seguro que desexas modificar este cliente?")) editarCliente(idCliente);
    }
}