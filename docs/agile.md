# Metodologías de Desarrollo Ágil

Este documento resume la investigación sobre metodologías ágiles realizada para el proyecto, definiendo el marco de trabajo y los objetivos de gestión.

## 1. ¿Qué es Agile?
Agile es una mentalidad centrada en la entrega iterativa e incremental de software. Su objetivo principal es **entregar valor real al usuario de forma temprana y continua**, permitiendo la adaptación a cambios de requisitos incluso en etapas avanzadas del desarrollo.

### Objetivos clave:
- **Reducción de riesgos:** Al validar pequeñas piezas de software funcionando.
- **Calidad técnica:** Fomento de la excelencia mediante revisiones constantes.
- **Flexibilidad:** Capacidad de respuesta ante cambios sin descarrilar el proyecto.

---

## 2. Framework: Scrum
Scrum es un marco de trabajo para abordar problemas complejos mediante ciclos fijos de tiempo.

### Conceptos Principales:
- **Roles:**
    - *Product Owner:* Define las prioridades y el valor del producto.
    - *Scrum Master:* Facilita el proceso y elimina impedimentos.
    - *Developers:* Equipo técnico que construye el incremento.
- **Artefactos:**
    - *Product Backlog:* Lista maestra de requisitos.
    - *Sprint Backlog:* Tareas seleccionadas para el ciclo actual.
    - *Incremento:* El software funcional y "Terminado" al final del ciclo.
- **Eventos:**
    - *Sprint:* Ciclo de 1 a 4 semanas.
    - *Planning, Daily, Review y Retrospective:* Ceremonias de inspección y adaptación.

---

## 3. Metodología: Kanban
Kanban se enfoca en gestionar el flujo de trabajo de manera visual y continua.

### Pilares:
- **Tablero Visual:** Visualización del estado de las tareas (To Do, In Progress, Done).
- **WIP Limit (Work In Progress):** Limitación de tareas en curso para evitar cuellos de botella y asegurar el enfoque.
- **Flujo Continuo:** Las tareas se mueven según la capacidad del equipo, sin interrupciones por ciclos cerrados.

---

## 4. Comparativa y Aplicación


| Característica | Scrum | Kanban |
| :--- | :--- | :--- |
| **Cadencia** | Sprints fijos (1-4 semanas). | Flujo continuo. |
| **Cambios** | No permitidos durante el Sprint. | Permitidos en cualquier momento. |
| **Enfoque** | Entregas por objetivos de ciclo. | Optimización del tiempo de entrega. |

### Decisión para este proyecto:
Para este desarrollo Fullstack, se aplicará un enfoque **Híbrido (Scrumban)**:
1. Se utilizarán **Sprints** de 1 semana para marcar hitos de funcionalidades (ej. Autenticación, API CRUD).
2. Se gestionará el día a día con un **Tablero Kanban** para visualizar el progreso y limitar el trabajo simultáneo.

