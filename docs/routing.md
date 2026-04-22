# 🛣️ Enrutamiento y Navegación - Frame & Page

Para la gestión de la navegación entre las distintas secciones de la aplicación, se ha implementado **React Router v6**. Esto permite una experiencia de navegación fluida sin recargas de página (Single Page Application).

## 🧭 Estructura de Rutas

La aplicación define las siguientes rutas principales dentro del componente `App.tsx`:


| Ruta | Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `Home` | Landing page con el "Hero" y el feed de incorporaciones recientes. |
| `/library` | `Library` | Vista principal de la colección con filtros y gestión de listas. |
| `/add` | `AddContent` | Formulario dinámico para añadir nuevos libros, películas o series. |
| `*` | `NotFound` | Ruta comodín (catch-all) que gestiona errores 404 de forma personalizada. |

## 🛠️ Implementación Técnica

### 1. MainLayout y Persistencia
Todas las rutas están envueltas en un componente `MainLayout`. Esto asegura que elementos como el **Navbar**, el **Footer** y el **Botón Flotante (FAB)** se mantengan persistentes y visibles durante toda la navegación.

### 2. Navegación Programática
Además de los enlaces estándar (`<Link>`), se ha implementado el hook `useNavigate` en el formulario de alta. Esto permite que, tras una acción exitosa (guardar contenido), el usuario sea redirigido automáticamente a la biblioteca, mejorando el flujo de usuario (*UX*).

### 3. Gestión de Errores (404)
Se ha diseñado un componente específico `NotFound` que utiliza la temática visual del proyecto ("Lost in the Archive") para guiar al usuario de vuelta al inicio cuando intenta acceder a una URL inexistente.

---
*Documentación generada para el Punto 9 del proyecto.*
