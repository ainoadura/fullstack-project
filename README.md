# 🎬 Frame & Page - My Media Universe

Este es un proyecto profesional **Fullstack** desarrollado con **React**, **Node.js** y **TypeScript**. La aplicación permite catalogar y organizar libros, películas y series en un entorno privado y elegante.

## 📁 Estructura de Documentación
En este repositorio se documenta detalladamente todo el ciclo de vida del desarrollo:

*   [**Metodologías Ágiles**](./docs/agile.md): Investigación sobre Scrum, Kanban y la metodología elegida.
*   [**Idea del Proyecto**](./docs/idea.md): Definición del problema, usuario objetivo y funcionalidades MVP.
*   [**Gestión del Proyecto**](./docs/project-management.md): Flujo de trabajo en Trello y convenciones de Git.
*   [**Arquitectura de Componentes**](./docs/components.md): Estructura visual, reutilización y diseño con Tailwind CSS.
*   [**Arquitectura API**](./docs/api.md): Especificación técnica de endpoints y códigos de respuesta HTTP.
*   [**Capa de Red**](./docs/api-client.md): Gestión de peticiones asíncronas, tipado y estados de la UI (Loading/Error).
*   [**Plan de Pruebas (QA)**](./docs/testing.md): Registro de pruebas manuales, responsive y gestión de errores.
*   [**Context API**](./docs/context.md): Gestión del estado global y justificación de su uso.
*   [**Custom Hooks**](./docs/hooks.md): Documentación de la lógica reutilizable (`useForm`, `useToggle`, `useLocalStorage`).
*   [**Enrutamiento (Routing)**](./docs/routing.md): Estructura de navegación y gestión de páginas 404.
*   [**Formularios e Interacción**](./docs/forms.md): Gestión de inputs controlados y validación de datos.

## 📋 Gestión del Proyecto
El desarrollo se gestiona mediante un tablero **Kanban** en Trello:
👉 [**Ver Tablero de Trello**](https://trello.com)

## 🚀 Funcionalidades
- **Fullstack Real:** Conexión asíncrona entre React y Node.js con tipado compartido.
- **Resiliencia:** Gestión avanzada de errores de red (offline/retry) y validaciones en frontend/backend.
- **Diseño Premium:** Interfaz responsive, soporte nativo para **Dark Mode** y animaciones suaves con Tailwind CSS v4.
- **Código Limpio:** Arquitectura por capas en el servidor y componentes atómicos en el cliente.

## 🛠️ Tecnologías Principales
- **Frontend:** React 18 + Vite + TypeScript.
- **Backend:** Node.js + Express + TypeScript.
- **Estilos:** Tailwind CSS v4.

## ⚙️ Instalación y Uso
1. **Frontend:** `cd frontend && npm install && npm run dev`
2. **Backend:** `cd server && npm install && npm run dev`
