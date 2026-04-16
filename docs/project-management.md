# Gestión del Proyecto

En este documento se describe la metodología y las herramientas utilizadas para organizar el ciclo de vida del desarrollo.

## 1. Metodología: Scrumban
Se ha seleccionado un enfoque híbrido que combina la estructura de **Scrum** con la flexibilidad de **Kanban**:
- **Sprints semanales:** Se definen objetivos claros cada semana (Setup, Core, Auth, etc.).
- **Tablero Kanban:** Se utiliza para visualizar el flujo de trabajo diario y limitar el trabajo en curso (WIP).

## 2. Herramientas de Organización
### Trello (Kanban Board)
El tablero se organiza en las siguientes columnas:
- **Backlog:** Todas las funcionalidades y requisitos técnicos pendientes.
- **To Do:** Tareas priorizadas para el Sprint actual.
- **Doing:** Tareas en ejecución activa.
- **Testing:** Validación y control de calidad.
- **Done:** Tareas finalizadas que cumplen con los requisitos.

👉 [Acceso al Tablero de Trello](https://trello.com)

## 3. Flujo de Trabajo en Git
Se sigue una convención de mensajes de commit clara para facilitar la lectura del historial:
- `feat:` Nuevas funcionalidades.
- `fix:` Corrección de errores.
- `docs:` Cambios en la documentación.
- `style:` Cambios en estilos (Tailwind, CSS) sin lógica de negocio.
- `arch:` Cambios en la estructura de carpetas o configuración base.

## 4. División de Tareas
Cada funcionalidad principal se desglosa en **subtareas técnicas** dentro de las tarjetas de Trello, permitiendo un seguimiento granular del desarrollo (ej. separar el diseño del formulario de su integración con la API).
