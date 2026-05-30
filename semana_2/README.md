# Semana 2 — Gestión de Datos con Objetos, Sets y Maps

Aplicación de estructuras de datos avanzadas en JavaScript para organizar, almacenar y manipular información de forma eficiente. La salida de todos los resultados se hace a través de la consola del navegador (`F12`).

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz visual con tarjetas de productos, chips del Set y tabla del Map |
| `style.css` | Estilos visuales (tema oscuro, layout centrado) |
| `gestion_datos.js` | Lógica principal — estructuras de datos, iteraciones y validaciones |

## Temas Aplicados

### Task 1 — Objetos
- Creación de tres objetos literales (`producto1`, `producto2`, `producto3`), cada uno con las propiedades `id`, `nombre` y `precio`.
- Solo se usan `const` y `let`, nunca `var`.

### Task 2 — Set
- Se crea un `Set` a partir de un array con números repetidos; el Set elimina los duplicados automáticamente.
- **`.add(50)`** — agrega un nuevo valor al Set.
- **`.has(30)`** — verifica si el valor 30 existe dentro del Set.
- **`.delete(10)`** — elimina el valor 10 del Set.
- Se recorre el Set con un bucle **`for...of`** para mostrar cada valor.

### Task 3 — Map
- Se crea un `Map` que asocia la categoría del producto (clave) con su nombre (valor).
- Se usan tres entradas: `"Periféricos"`, `"Accesorios"` y `"Pantallas"`.

### Task 4 — Iteraciones
- **`for...in`** — recorre las propiedades del objeto `producto1` (id, nombre, precio).
- **`for...of`** — recorre los valores únicos del Set.
- **`forEach()`** — itera sobre el Map mostrando cada clave y valor de forma descriptiva.
- **`Object.keys()`** — devuelve un array con los nombres de las propiedades del objeto.
- **`Object.values()`** — devuelve un array con los valores de las propiedades.
- **`Object.entries()`** — devuelve un array de pares `[clave, valor]`.

### Task 5 — Validaciones
- Función `validarProducto(producto)` que verifica:
  - `id` no sea `undefined` ni cadena vacía.
  - `nombre` no sea `undefined` ni cadena vacía.
  - `precio` sea un número válido y mayor a `0`.
- Se prueban los tres productos válidos y un `productoInvalido` con datos incorrectos para demostrar el manejo de errores con `console.error()`.

## Ejecución
1. Abre `semana_2/index.html` en el navegador.
2. La interfaz muestra los productos, el Set y el Map visualmente.
3. Abre la consola del desarrollador (`F12 → Consola`) para ver todas las iteraciones y resultados de validación.
