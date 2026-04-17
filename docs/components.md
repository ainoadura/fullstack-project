# Documentación de Componentes

Este documento describe los componentes de interfaz reutilizables desarrollados para el proyecto **My Library**, detallando su propósito, propiedades y uso.

## 1. Componentes de UI Base

### 1.1 Navbar
- **Propósito**: Barra de navegación principal de la aplicación.
- **Características**: Incluye efectos de "Glassmorphism" (`backdrop-blur`) y posicionamiento fijo (`sticky`).
- **Interacciones**: Utiliza enlaces de `react-router-dom` para navegación SPA sin recarga.

### 1.2 Button (Botón)
- **Propósito**: Botón altamente reutilizable con múltiples estilos visuales.
- **Props**:
    - `variant`: ('primary', 'secondary', 'danger') - Controla el esquema de colores.
    - `...props`: Hereda todos los atributos estándar de un botón HTML (onClick, type, etc.).
- **Estilos**: Incluye transiciones de Tailwind y efectos de escala al hacer clic.

### 1.3 Badge (Etiqueta)
- **Propósito**: Etiqueta visual para identificar la categoría del contenido.
- **Props**:
    - `type`: ('BOOK', 'MOVIE', 'TV_SERIES').
- **Lógica**: Mapea automáticamente la categoría a colores específicos (Verde para Libros, Púrpura para Pelis, Ámbar para Series).

---

## 2. Componentes Basados en Datos

### 2.1 MediaCard (Tarjeta de Contenido)
- **Propósito**: Representación visual de un libro, película o serie individual.
- **Props (Tipadas)**:
    - `title`: string.
    - `type`: MediaType.
    - `rating`: number (1-5).
    - `authorOrDirector`: string (opcional).
    - `coverUrl`: string (opcional).
- **Características**: Renderizado condicional para portadas faltantes ("No cover available").

### 2.2 MediaList (Lista de Contenido)
- **Propósito**: Orquestar el diseño de múltiples tarjetas `MediaCard`.
- **Props**:
    - `items`: Un array de objetos `MediaItem`.
- **Layout**: Implementa un **Grid Responsivo** (de 1 columna en móvil hasta 4 en pantallas grandes).
- **Estado Vacío**: Muestra un diseño con borde discontinuo si la colección está vacía.

---

## 3. Componentes Estructurales

### 3.1 MainLayout (Composición)
- **Propósito**: El "Esqueleto" o marco de la aplicación.
- **Mecanismo**: Utiliza la prop `children` para envolver el contenido de todas las páginas.
- **Estructura**: Incluye el `Navbar` superior, un contenedor principal centrado y el `Footer`.

---

## 4. Componentes de Formulario y Modales

### 4.1 InputField
- **Propósito**: Wrapper estandarizado para campos de entrada de texto.
- **Props**:
    - `label`: El texto que aparece sobre el input.
    - `...props`: Atributos estándar de un input HTML.

### 4.2 DetailModal
- **Propósito**: Ventana emergente para mostrar información detallada o confirmaciones.
