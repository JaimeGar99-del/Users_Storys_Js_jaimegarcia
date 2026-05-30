# Semana 4 — Aplicación Web Integral con Fetch API y CRUD

Mini aplicación de gestión de tareas que consolida todos los conceptos del módulo: manipulación del DOM, persistencia en localStorage y comunicación asíncrona con un servidor externo mediante Fetch API.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura de la aplicación de tareas |
| `style.css` | Estilos visuales (tema oscuro, estados de tarea) |
| `app.js` | Lógica completa: Fetch, async/await, DOM y localStorage |

## Temas Aplicados

### Fetch API — Consumo de API Externa
Se usa la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) para simular un servidor real.

| Método HTTP | Uso en la aplicación |
|-------------|----------------------|
| `GET` | Carga las 5 tareas iniciales desde el servidor al abrir la app |
| `POST` | Simula el guardado de una nueva tarea en el servidor |
| `PUT` | Simula la actualización del estado completado/pendiente de una tarea |
| `DELETE` | Simula la eliminación de una tarea en el servidor |

### Manejo de Asincronía
- **`async / await`** — permite escribir código asíncrono de forma legible, esperando la respuesta del servidor antes de continuar.
- **`try...catch`** — captura errores de red o de servidor y los registra con `console.error()` sin romper la aplicación.

### Persistencia Offline
- Las tareas creadas por el usuario se guardan en `localStorage` con `JSON.stringify()`.
- Al recargar la página, se recuperan con `JSON.parse()` y se fusionan con las tareas cargadas desde la API.
- Esto garantiza acceso a los datos tanto online como offline.

### Manipulación Dinámica del DOM
- Se insertan, actualizan y eliminan tarjetas de tareas en respuesta a cada acción del usuario.
- El estado visual (completado / pendiente) cambia de forma reactiva al hacer clic en la tarea.

## Flujo de la Aplicación
1. Al cargar, se hace un `GET` a la API y se renderizan 5 tareas de prueba junto con las guardadas localmente.
2. El usuario rellena el formulario y envía → se hace un `POST` y la tarea aparece en la lista.
3. Al hacer clic en el nombre de una tarea → se hace un `PUT` y cambia su estado.
4. Al hacer clic en "Eliminar" → se hace un `DELETE` y la tarea desaparece de la lista y del localStorage.

## Ejecución
1. Abre `semana_4/index.html` en el navegador (requiere conexión a internet para la carga inicial).
2. La app cargará automáticamente tareas desde JSONPlaceholder.
3. Agrega, completa y elimina tareas con la interfaz.
4. Abre la consola del desarrollador (`F12 → Consola`) para ver cada llamada de red registrada.
