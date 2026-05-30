# Semana 1 — Sistema Interactivo de Validación de Usuario

Introducción a los fundamentos de JavaScript: interacción con el usuario a través del navegador, declaración de variables y toma de decisiones con condicionales.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura de la página |
| `style.css` | Estilos visuales |
| `sistema_interactivo.js` | Lógica principal del ejercicio |

## Temas Aplicados

### Variables
- Uso de `const` para valores que no cambian y `let` para valores que pueden cambiar.
- No se utiliza `var`.

### Interacción con el Navegador
- `prompt()` — captura texto ingresado por el usuario en una ventana emergente.
- `alert()` — muestra un mensaje emergente con el resultado de la validación.

### Consola
- `console.log()` — registra el flujo exitoso (nombre y edad válidos).
- `console.error()` — registra errores cuando los datos son inválidos.

### Condicionales
- `if / else` para verificar si los datos ingresados son correctos.
- `isNaN()` para detectar si el valor capturado no es un número válido.

## Flujo de la Aplicación
1. El usuario ingresa su **nombre** con `prompt()`.
2. El usuario ingresa su **edad** con `prompt()`.
3. Si ambos datos son válidos → `alert()` con mensaje de bienvenida y `console.log()`.
4. Si algún dato es inválido → `alert()` con mensaje de error y `console.error()`.

## Ejecución
1. Abre `semana_1/index.html` en cualquier navegador.
2. Sigue las ventanas emergentes para ingresar nombre y edad.
3. Abre la consola del desarrollador (`F12 → Consola`) para ver los registros.