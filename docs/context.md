# 🌐 Context API - Estado Global

En **Frame & Page**, hemos implementado la Context API de React para gestionar el estado global de la aplicación. Esto permite que la información de la biblioteca sea accesible desde cualquier componente sin necesidad de pasar *props* manualmente a través de múltiples niveles (prop drilling).

## 🚀 ¿Cuándo es útil usar Context API?

El uso de Context API en este proyecto está justificado por las siguientes razones:

1.  **Estado Compartido:** Varias páginas independientes (`Home`, `Library`, `AddContent`) necesitan leer o modificar la misma lista de publicaciones.
2.  **Evitar Prop Drilling:** Sin Context, tendríamos que pasar la función de añadir contenido desde el componente raíz a través de capas innecesarias.
3.  **Persistencia Transversal:** Permite que al navegar entre rutas de la SPA (*Single Page Application*), los datos se mantengan sincronizados sin realizar nuevas peticiones innecesarias.
4.  **Simplicidad:** Para una aplicación de catálogo personal, Context ofrece una solución ligera y nativa sin la complejidad de librerías externas como Redux.

## 🛠️ Implementación: `MediaContext`

### 1. Definición (`createContext`)
Se ha creado un contexto tipado con TypeScript que define la estructura de los ítems (libros, películas, series) y las funciones de manipulación (`addItem`, `deleteItem`).

### 2. El Proveedor (`MediaProvider`)
Ubicado en `src/context/MediaContext.tsx`, este componente:
- Mantiene el estado real mediante el hook `useState`.
- Implementa la persistencia automática con **LocalStorage** mediante un `useEffect`, asegurando que los datos no se pierdan al recargar el navegador.

### 3. Consumo (`useMedia`)
Se ha desarrollado un *Custom Hook* llamado `useMedia` para consumir el contexto de forma segura. Este hook incluye una comprobación de seguridad para asegurar que se está utilizando dentro de su correspondiente *Provider*.

---
*Documentación generada para el Punto 8 del proyecto.*
