let db;

const request = indexedDB.open('TendaDB', 2); // Cambio a versión porque xa estaba creada e se non non se executa o request.onupgradeneeded

request.onerror = function (event) {
    console.error('Erro ao abrir a base de datos', event.target.errorCode);
}

request.onupgradeneeded = function (event) {
    db = event.target.result;

    // Creamos o objectStore "clientes"
    const objectStore = db.createObjectStore('clientes', {
        keyPath: 'id',
        autoIncrement: true
    });

    // Creamos os índices para buscar por nome,email,telefono,idade
    objectStore.createIndex('nome', 'nome', {
        unique: false,
    });
    objectStore.createIndex('email', 'email', {
        unique: false,
    });
    objectStore.createIndex('telefono', 'telefono', {
        unique: false,
    });
    objectStore.createIndex('idade', 'idade', {
        unique: false,
    });
};


request.onsuccess = function (event) {
    db = event.target.result;
    mostrarClientes();
};


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

function engadirCliente(cliente) {
    const tx = db.transaction(["clientes"], "readwrite");
    const objectStore = tx.objectStore('clientes');
    const request = objectStore.add(cliente);

    request.onsuccess = function (event) {
        console.log(`Cliente ${cliente.nome} engadido correctamente`);
    };

    request.onerror = function (event) {
        console.error('Erro ao engadir o cliente', event.target.error);
    };
}

function mostrarClientes() {

    const div = document.getElementById('listaClientes');
    div.innerHTML = ""; // Limpiamos antes de volver a cargar

    const table = document.createElement('table');
    table.id = 'clientesTable';

    // ---- CABECERA DE LA TABLA ----
    const thead = document.createElement('thead');
    const filaHead = document.createElement('tr');

    const cabeceras = ['ID', 'Nome', 'Email', 'Teléfono', 'Idade', 'Accións'];

    cabeceras.forEach(cabecera => {
        const th = document.createElement('th');
        th.textContent = cabecera;
        filaHead.appendChild(th);
    });

    thead.appendChild(filaHead);
    table.appendChild(thead);

    // ---- CUERPO DE LA TABLA ----
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
                    <button class="edit-btn" onclick="editarCliente(${cliente.id})">✏</button>
                    <button class="delete-btn" onclick="eliminarCliente(${cliente.id})">🗑</button>
                </td>
            `;


            tbody.appendChild(fila);
            cursor.continue();

        } else {
            console.log("Todos os clientes foron cargados");
        }
    };

    table.appendChild(tbody);
    div.appendChild(table);
}
