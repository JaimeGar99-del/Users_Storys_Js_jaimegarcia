# Semana 3 — Manipulación del DOM y Persistencia con localStorage

Construcción de una interfaz dinámica donde el usuario puede agregar y eliminar notas, con persistencia automática en el navegador mediante localStorage.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `manipulacion_dom.html` | Estructura de la página con el formulario y la lista de notas |
| `style.css` | Estilos visuales (tema oscuro, animaciones) |
| `script.js` | Lógica completa de DOM, eventos y persistencia |

## Temas Aplicados

### Selección de Elementos del DOM
- **`document.getElementById()`** — selecciona el input y la lista por su `id`.
- **`document.querySelector()`** — selecciona elementos por clase o atributo.

### Creación Dinámica de Nodos
- **`document.createElement()`** — genera etiquetas `<li>`, `<span>` y `<button>` en tiempo de ejecución.
- **`.textContent`** — asigna el texto visible de cada elemento creado.
- **`.appendChild()`** — inserta el nodo creado dentro del contenedor de la lista.

### Eliminación de Nodos
- **`.removeChild()`** — elimina un elemento `<li>` de la lista desde su nodo padre cuando el usuario presiona el botón "Eliminar".

### Manejo de Eventos
- Se escucha el evento `click` del botón "Agregar" para disparar la lógica de creación de notas.
- Cada botón de eliminar tiene su propio listener para remover únicamente su nota asociada.

### Persistencia con localStorage
- **`JSON.stringify()`** — convierte el array de notas en memoria a una cadena JSON antes de guardarlo.
- **`localStorage.setItem()`** — guarda la cadena JSON en el almacenamiento local del navegador.
- **`localStorage.getItem()`** — recupera la cadena JSON al cargar la página.
- **`JSON.parse()`** — convierte la cadena JSON de vuelta a un array para reconstruir la lista.

## Flujo de la Aplicación
1. Al cargar la página, se recuperan las notas guardadas en localStorage y se renderizan automáticamente.
2. El usuario escribe una nota en el input y hace clic en "Agregar".
3. La nota aparece en la lista y se guarda en localStorage.
4. Al recargar (`F5`), las notas persisten.
5. El usuario puede eliminar cualquier nota con su botón, actualizando también localStorage.

## Ejecución
1. Abre `semana_3/manipulacion_dom.html` en el navegador.
2. Agrega notas con el formulario.
3. Recarga la página (`F5`) para confirmar la persistencia.
4. Elimina notas con el botón correspondiente.
