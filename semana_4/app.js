
// Elementos del DOM necesarios para la interacción
const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const btnSincronizar = document.getElementById("btnSincronizar");
const estadoAPI = document.getElementById("estadoAPI");

// Dirección base de la API pública para las peticiones de red
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Arreglo
let tareas = [];

// Muestra mensajes de estado de forma temporal en la interfaz
function mostrarMensajeEstado(texto, tipo) {
    estadoAPI.textContent = texto;
    estadoAPI.className = "status-message " + tipo;
    setTimeout(() => {
        estadoAPI.textContent = "";
        estadoAPI.className = "status-message";
    }, 4000);
}

// Guarda el arreglo como JSON en el navegador
function guardarEnLocalStorage() {
    localStorage.setItem("tareas_semana4", JSON.stringify(tareas));
}

// Recupera y renderiza los datos almacenados al recargar la sesión
function cargarDesdeLocalStorage() {
    const local = localStorage.getItem("tareas_semana4");
    if (local) {
        tareas = JSON.parse(local);
        renderizarTareas();
    }
}

// Redibuja toda la lista de tareas en el DOM
function renderizarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach(tarea => {
        crearElementoDOM(tarea);
    });
}

// Crea físicamente una tarea li y la inyecta al final de la lista ul
function crearElementoDOM(tarea) {
    const li = document.createElement("li");
    li.dataset.id = tarea.id;
    if (tarea.completed) {
        li.classList.add("completed");
    }

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = tarea.title;
    span.addEventListener("click", () => toggleCompletar(tarea.id));

    // Botón de borrado para remover el elemento del DOM
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarTarea(tarea.id));

    // Insertamos los nodos en el elemento de la lista y luego al contenedor ul
    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
}

// Petición GET: Obtiene la lista de elementos iniciales de la API externa
async function obtenerTareasAPI() {
    try {
        const respuesta = await fetch(API_URL + "?_limit=5");
        if (!respuesta.ok) throw new Error("Error en respuesta del servidor");
        const datos = await respuesta.json();
        
        tareas = datos;
        guardarEnLocalStorage();
        renderizarTareas();
        console.log("Datos obtenidos de la API:", datos);
        mostrarMensajeEstado("GET exitoso: Se cargaron tareas de la API.", "success");
    } catch (error) {
        console.error("Error al obtener datos:", error);
        mostrarMensajeEstado("Error al conectar con la API (GET).", "error");
    }
}

// Petición POST: Agrega una nueva tarea a la lista, al Local Storage y la reporta al servidor
async function agregarTarea() {
    const titulo = inputTarea.value.trim();
    // Validación de campo para evitar valores vacíos
    if (titulo === "") {
        console.error("Error: Entrada de tarea vacía.");
        mostrarMensajeEstado("Error: El campo de la tarea no puede estar vacío.", "error");
        return;
    }

    const nuevaTarea = {
        id: Date.now(),
        title: titulo,
        completed: false
    };

    // Actualización local
    tareas.push(nuevaTarea);
    guardarEnLocalStorage();
    crearElementoDOM(nuevaTarea);
    
    console.log("Tarea agregada localmente:", nuevaTarea);
    
    inputTarea.value = "";
    inputTarea.focus();

    // Sincronización asíncrona con el servidor mediante POST
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                title: nuevaTarea.title,
                completed: nuevaTarea.completed,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (!respuesta.ok) throw new Error("Error al guardar en servidor");
        const datosServidor = await respuesta.json();
        console.log("POST exitoso en el servidor:", datosServidor);
        mostrarMensajeEstado("POST exitoso: Sincronizado en el servidor.", "success");
    } catch (error) {
        console.error("Error en POST:", error);
        mostrarMensajeEstado("Error al guardar en el servidor.", "error");
    }
}

// Petición PUT: Actualiza el estado de completado en el Local Storage y en el servidor
async function toggleCompletar(id) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    tarea.completed = !tarea.completed;
    guardarEnLocalStorage();
    renderizarTareas();

    console.log("Estado de tarea cambiado localmente:", tarea);

    // Sincronización con el servidor mediante PUT (redirección simulada a id 1 para evitar 404s en tareas nuevas)
    try {
        const urlModificar = id < 1000 ? `${API_URL}/${id}` : `${API_URL}/1`;
        const respuesta = await fetch(urlModificar, {
            method: "PUT",
            body: JSON.stringify({
                id: tarea.id,
                title: tarea.title,
                completed: tarea.completed,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (!respuesta.ok) throw new Error("Error al actualizar en servidor");
        const datosServidor = await respuesta.json();
        console.log("PUT exitoso en el servidor:", datosServidor);
        mostrarMensajeEstado("PUT exitoso: Estado actualizado en el servidor.", "success");
    } catch (error) {
        console.error("Error en PUT:", error);
        mostrarMensajeEstado("Error al actualizar en el servidor.", "error");
    }
}

// Petición DELETE: Remueve la tarea del DOM, de la memoria, de Local Storage y del servidor
async function eliminarTarea(id) {
    const li = listaTareas.querySelector(`li[data-id="${id}"]`);
    if (li) {
        // Remoción física del DOM usando removeChild
        listaTareas.removeChild(li);
    }

    // Actualización local
    tareas = tareas.filter(t => t.id !== id);
    guardarEnLocalStorage();

    console.log("Tarea eliminada localmente (ID):", id);

    // Sincronización con el servidor mediante DELETE (redirección simulada a id 1 para tareas de la sesión)
    try {
        const urlEliminar = id < 1000 ? `${API_URL}/${id}` : `${API_URL}/1`;
        const respuesta = await fetch(urlEliminar, {
            method: "DELETE"
        });
        if (!respuesta.ok) throw new Error("Error al eliminar del servidor");
        console.log("DELETE exitoso en el servidor para ID:", id);
        mostrarMensajeEstado("DELETE exitoso: Eliminado del servidor.", "success");
    } catch (error) {
        console.error("Error en DELETE:", error);
        mostrarMensajeEstado("Error al eliminar del servidor.", "error");
    }
}

// Event Listeners principales
btnAgregar.addEventListener("click", agregarTarea);
btnSincronizar.addEventListener("click", obtenerTareasAPI);

inputTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarTarea();
    }
});

// Carga inicial al refrescar
cargarDesdeLocalStorage();
if (tareas.length === 0) {
    obtenerTareasAPI();
}
