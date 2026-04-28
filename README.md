# 🎬 Frame & Page - My Media Universe

Este es un proyecto profesional **Fullstack** desarrollado con **React**, **Node.js** y **TypeScript**. La aplicación permite catalogar y organizar libros, películas y series en un entorno privado y elegante.

*   [**Metodologías Ágiles**](./docs/agile.md): Investigación sobre Scrum, Kanban y la metodología elegida.
*   [**Idea del Proyecto**](./docs/idea.md): Definición del problema, usuario objetivo y funcionalidades MVP.
*   [**Arquitectura API**](./docs/api.md): Especificación técnica de endpoints y códigos de respuesta HTTP.
*   [**Capa de Red**](./docs/network.md): Gestión de peticiones asíncronas, tipado y estados de la UI (Loading/Error).
*   [**Context API**](./docs/context.md): Gestión del estado global y justificación de su uso.
*   [**Custom Hooks**](./docs/hooks.md): Documentación de la lógica reutilizable (`useForm`, `useToggle`, `useLocalStorage`).
*   [**Enrutamiento (Routing)**](./docs/routing.md): Estructura de navegación y gestión de páginas 404.
*   [**Formularios e Interacción**](./docs/forms.md): Gestión de inputs controlados y validación de datos.
*   [**Arquitectura de Componentes**](./docs/components.md): Estructura visual, reutilización y diseño con Tailwind.
*   [**Gestión del Proyecto**](./docs/project-management.md): Flujo de trabajo en Trello y convenciones de Git.

## 📋 Gestión del Proyecto
El desarrollo se gestiona mediante un tablero **Kanban** en Trello:
👉 [**Ver Tablero de Trello**](https://trello.com/b/bGED0kAU/fullstack-project)

## 🚀 Funcionalidades Implementadas
### Frontend
- **Integración con API:** Cliente tipado para consumo de datos en tiempo real (Sustituye LocalStorage).
- **Gestión de Estados de Red:** Control de carga (Loading), éxito y errores con reintento.
- **UI/UX Premium:** Diseño con Tailwind CSS v4, soporte nativo para **Dark Mode** y validación de formularios.
- **Optimización:** Uso de `useMemo` y `useCallback` para un rendimiento eficiente.

### Backend 
- **Arquitectura por Capas:** Estructura profesional con Rutas, Controladores y Servicios.
- **API RESTful:** Endpoints completos (GET, POST, PUT, DELETE) con códigos de estado HTTP estandarizados.
- **Validación en Frontera:** Sistema de control de datos obligatorios antes del procesamiento.

## 🛠️ Tecnologías Principales
- **Frontend:** React 18 + Vite + TypeScript.
- **Backend:** Node.js + Express + TypeScript.
- **Estilos:** Tailwind CSS v4.

## ⚙️ Instalación y Uso
1. **Frontend:** `cd frontend && npm install && npm run dev`
2. **Backend:** `cd server && npm install && npm run dev`

