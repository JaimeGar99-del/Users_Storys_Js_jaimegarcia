// Creación de objetos de productos
// Cada producto tiene: id, nombre, precio

const producto1 = {
    id: "PROD1",
    nombre: "Teclado Mecánico",
    precio: 49.99
};

const producto2 = {
    id: "PROD2",
    nombre: "Mouse Inalámbrico",
    precio: 25.50
};

const producto3 = {
    id: "PROD3",
    nombre: "Monitor Gamer",
    precio: 189.90
};

// Uso de Set

// Lista de números con valores repetidos
const numerosLista = [5, 10, 5, 20, 10, 30, 20, 40];

// Al crear el Set, los duplicados se eliminan
const misNumeros = new Set(numerosLista);

console.log("Lista original con repetidos:", numerosLista);
console.log("Contenido del Set (valores únicos):", misNumeros);

// Agregar un nuevo elemento con .add()
misNumeros.add(50);
console.log("Set después de agregar el 50:", misNumeros);

// Verificar existencia de un elemento con .has()
const tieneTreinta = misNumeros.has(30);
console.log("¿El Set contiene el número 30?:", tieneTreinta);

// Eliminar un elemento con .delete()
misNumeros.delete(10);
console.log("Set después de eliminar el 10:", misNumeros);

// Recorrer el Set con for...of
console.log("Recorriendo el Set con for...of:");
for (const numero of misNumeros) {
    console.log("  Valor:", numero);
}

// Creación de un Map
// Relaciona categoría (clave) con nombre del producto (valor)

const categoriasMap = new Map();
categoriasMap.set("Periféricos", "Teclado Mecánico");
categoriasMap.set("Accesorios",  "Mouse Inalámbrico");
categoriasMap.set("Pantallas",   "Monitor Gamer");

console.log("Contenido del Map de categorías:", categoriasMap);

// for...in → itera sobre las propiedades de un objeto
console.log("Propiedades de producto1 con for...in:");
for (const propiedad in producto1) {
    console.log("  " + propiedad + ":", producto1[propiedad]);
}

// for...of → itera sobre los valores de un Set (o iterable)
console.log("Valores del Set con for...of:");
for (const valor of misNumeros) {
    console.log("  Número único:", valor);
}

// forEach() → itera sobre el Map mostrando clave y valor
console.log("Entradas del Map con forEach():");
categoriasMap.forEach(function(valor, clave) {
    console.log("  Categoría:", clave, "→ Producto:", valor);
});

// Métodos de Object sobre producto1
console.log("Object.keys(producto1):",    Object.keys(producto1));
console.log("Object.values(producto1):",  Object.values(producto1));
console.log("Object.entries(producto1):", Object.entries(producto1));

// Validación de productos
// Verifica que id, nombre y precio sean correctos

function validarProducto(producto) {
    // Validar id
    if (producto.id === undefined || producto.id === "") {
        console.error("Error: El producto no tiene un ID válido.");
        return false;
    }
    // Validar nombre
    if (producto.nombre === undefined || producto.nombre === "") {
        console.error("Error: El producto no tiene un nombre válido.");
        return false;
    }
    // Validar precio (debe ser número positivo)
    if (producto.precio === undefined || isNaN(producto.precio) || producto.precio <= 0) {
        console.error("Error: El producto no tiene un precio válido.");
        return false;
    }
    return true;
}

// Pruebas de validación
console.log("--- PRUEBAS DE VALIDACIÓN ---");
console.log("Validando producto1:", validarProducto(producto1));
console.log("Validando producto2:", validarProducto(producto2));
console.log("Validando producto3:", validarProducto(producto3));

// Producto inválido para demostrar el manejo de errores
const productoInvalido = {
    id: "",
    nombre: "Producto Fallido",
    precio: -5
};
console.log("Validando producto inválido:", validarProducto(productoInvalido));
