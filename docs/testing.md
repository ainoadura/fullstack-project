# 🧪 Plan de Pruebas y Control de Calidad (QA)

Este documento detalla el proceso de validación realizado para garantizar la estabilidad, usabilidad y robustez de **Frame & Page**.

## 🕹️ 1. Pruebas Funcionales (E2E Manual)
Se han ejecutado los flujos principales de usuario verificando los siguientes puntos:

- **Validación de Datos:** Se ha comprobado que el formulario de alta bloquea títulos de menos de 3 caracteres, mostrando un mensaje de error visual y evitando la petición a la API.
- **Ciclo de Vida de los Datos:** Se ha verificado que al guardar una nueva "Story", el sistema espera la respuesta del servidor (`201 Created`), muestra un mensaje de confirmación y redirige automáticamente a la biblioteca.
- **Integridad del Borrado:** Se ha testado que la eliminación de un ítem en la UI se sincroniza correctamente con una petición `DELETE` al backend, actualizando el estado global de forma reactiva.

## 📱 2. Pruebas de Diseño Responsive
Utilizando las herramientas de desarrollo del navegador, se ha validado la interfaz en resoluciones móviles (iPhone SE, Pixel 7):

- **Adaptabilidad de Grid:** Las tarjetas de la biblioteca pasan de un formato multi-columna a una columna única en pantallas pequeñas.
- **Formularios:** Los inputs y botones de acción (Save/Back) se ajustan al ancho de pantalla, manteniendo la facilidad de uso táctil.
- **Modo Oscuro:** Se ha verificado la legibilidad y el contraste de colores en ambos temas (Light/Dark).

## 📡 3. Pruebas de Capa de Red y Resiliencia
Se han simulado escenarios de fallo para comprobar la robustez del sistema:

- **Servidor Offline:** Al apagar el backend, la aplicación detecta el error de conexión (`ERR_CONNECTION_REFUSED`) y muestra una pantalla de error amigable con opción de reintento.
- **Reintento Funcional:** El botón "Re-open Archive" ejecuta una nueva llamada a la API que recupera la normalidad una vez el servidor vuelve a estar activo.

## 🧹 4. Limpieza y Optimización de Código
- **Depuración:** Eliminación de `console.log` innecesarios y limpieza de variables/imports no utilizados.
- **Consola:** Se ha verificado que la consola del navegador está libre de *Warnings* y errores de ejecución en el "camino feliz" del usuario.

---
*Documentación finalizada para el Punto 13 del proyecto.*
