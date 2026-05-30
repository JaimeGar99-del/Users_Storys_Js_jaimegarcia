// Selección de elementos del DOM
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");

console.log("inputNota:", inputNota);
console.log("btnAgregar:", btnAgregar);
console.log("listaNotas:", listaNotas);

// Arreglo para guardar las notas en memoria
let notas = [];

// Recupera las notas de Local Storage
function cargarNotas() {
    const notasGuardadas = localStorage.getItem("notas");
    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        console.log("Se cargaron " + notas.length + " notas.");
        notas.forEach(function(notaText) {
            crearNotaEnDOM(notaText);
        });
    } else {
        console.log("Se cargaron 0 notas.");
    }
}

// Crea y agrega la nota al DOM
function crearNotaEnDOM(texto) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = texto;
    
    // Botón para eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-delete";
    
    // Evento para eliminar la nota
    btnEliminar.addEventListener("click", function() {
        listaNotas.removeChild(li);
        const index = notas.indexOf(texto);
        if (index > -1) {
            notas.splice(index, 1);
        }
        localStorage.setItem("notas", JSON.stringify(notas));
        console.log("Nota eliminada: " + texto);
    });
    
    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
}

// Evento para agregar notas al hacer clic
btnAgregar.addEventListener("click", function() {
    const texto = inputNota.value.trim();
    
    // Valida que el campo no esté vacío
    if (texto === "") {
        alert("Por favor, ingresa una nota.");
        return;
    }
    
    notas.push(texto);
    localStorage.setItem("notas", JSON.stringify(notas));
    crearNotaEnDOM(texto);
    
    console.log("Nota agregada: " + texto);
    
    inputNota.value = "";
    inputNota.focus();
});

cargarNotas();
