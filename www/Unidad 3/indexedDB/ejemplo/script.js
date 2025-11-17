// Verificar compatibilidade do navegador con IndexedDB
if (!window.indexedDB) {
    alert("O teu navegador non soporta IndexedDB. A aplicación non funcionará correctamente.");
}
// Nome e versión da base de datos
const dbName = "ToDoListDB";
const dbVersion = 1;
let db;
// Abrir (ou crear) a base de datos
const request = indexedDB.open(dbName, dbVersion);
// Xestionar erros ao abrir a base de datos
request.onerror = function (event) {
    console.error("Erro ao abrir a base de datos:", event.target.errorCode);
};
// Configurar o esquema da base de datos
request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true
    });
    objectStore.createIndex("description", "description", {unique: false});
    console.log("Obxecto 'tasks' creado na base de datos.");
};
// Unha vez aberta a base de datos
request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Base de datos aberta exitosamente.");
    displayTasks();
};

// Función para engadir unha tarefa
function addTask(description) {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const task = {description: description, completed: false};
    est = objectStore.add(task);
    request.onsuccess = function () {
        console.log("Tarefa engadida:", description);
        displayTasks();
    };
    request.onerror = function (event) {
        console.error("Erro ao engadir a tarefa:", event.target.error);
    };
}

// Función para obter e mostrar todas as tarefas
function displayTasks() {
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = ""; // Limpar a lista
    const transaction = db.transaction(["tasks"], "readonly");
    const objectStore = transaction.objectStore("tasks");
    objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
            const li = document.createElement("li");
            li.className = "task-item";
            li.textContent = cursor.value.description;
            tasksList.appendChild(li);
            cursor.continue();
        } else {
            console.log("Todas as tarefas foron mostradas.");
        }
    };
}

// Xestionar o envío do formulario
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const description = taskInput.value.trim();
    if (description !== "") {
        addTask(description);
        taskInput.value = "";
    }
});
