// Solicita el nombre y la edad del usuario
const nombre = prompt("Ingresa tu nombre:");
const edadInput = prompt("Ingresa tu edad:");

// Valida si la edad no es un número o si está vacío
if (isNaN(edadInput) || edadInput === "" || edadInput === null) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {
    // Convierte el texto de la edad a número
    const edad = Number(edadInput);

    // Muestra un mensaje diferente según si es menor o mayor de edad
    if (edad < 18) {
        alert("Hola " + nombre + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
    } else {
        alert("Hola " + nombre + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
    }
}