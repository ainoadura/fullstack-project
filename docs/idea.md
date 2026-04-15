# Idea del Proyecto: NoName

## 1. Visión General
Una plataforma centralizada para catalogar y compartir libros, películas y series en un entorno privado. Resuelve la fragmentación de tener que usar múltiples apps al unificar todo el contenido audiovisual y de lectura en un solo lugar.

## 2. Problemas a Resolver
- **Fragmentación de contenido:** Actualmente, los usuarios deben usar plataformas distintas para cada tipo de media (Goodreads para libros, Letterboxd para cine, TV Time para series). Esta app centraliza todo el catálogo de ocio en un solo lugar.
- **Falta de privacidad en redes sociales de nicho:** Muchas plataformas actuales son públicas por defecto. Este proyecto se enfoca en un círculo cerrado de "amigos", donde las reseñas y el progreso solo son visibles para personas de confianza, fomentando un espacio más honesto y personal.

## 3. Stack Tecnológico Seleccionado
Para garantizar un desarrollo profesional y escalable, se utilizarán las siguientes tecnologías:
- **Frontend:** React + Vite con **TypeScript** para un tipado robusto.
- **Estilos:** **Tailwind CSS** para un diseño responsivo y moderno.
- **Backend:** **Node.js** con **Express**, siguiendo una arquitectura por capas (Routes, Controllers, Services).
- **Base de Datos:** **PostgreSQL** o **MongoDB** (a definir en el diseño de datos).
- **Comunicación:** API REST con cliente tipado en el frontend.

## 4. Usuario Objetivo
- **Entusiastas del ocio multiplataforma:** Personas que consumen libros, series y películas por igual y quieren un inventario único.
- **Grupos de amigos y comunidades pequeñas:** Usuarios que no buscan ser "influencers" de reseñas, sino simplemente compartir recomendaciones genuinas con su entorno cercano.
- **Usuarios preocupados por la privacidad:** Personas que prefieren que sus hábitos de consumo no sean rastreables por el público general.

## 5. Funcionalidades Principales (MVP)
### 5.1 Formulario Dinámico de Entrada
- **Botón "ADD":** Despliega un formulario interactivo.
- **Selector de Categoría:** Desplegable para elegir entre Libro, Película o Serie.
- **Lógica Condicional:** 
  - Si es **Libro**: Solicita Autor y Número de páginas.
  - Si es **Serie**: Solicita Temporadas y Capítulos.
  - Si es **Película**: Solicita Director y Duración.
- **Multimedia:** Campo para añadir la URL de la portada o previsualizar una imagen.
- **Reseña:** Sistema de calificación (0-5 estrellas) y área de texto para opinión.
### 5.2 Gestión y Visualización
- **Biblioteca Personal:** Visualización en cuadrícula (Grid) de todo el contenido guardado por el usuario.
- **Persistencia de Datos:** Los datos se almacenarán de forma permanente en una **Base de Datos** relacional, gestionada a través de la API en Node.js/Express.
- **Filtros y Búsqueda:** Buscador por título y filtros rápidos por tipo de medio (Libro/Peli/Serie) procesados en el cliente.
### 5.3 Componente Social
- **Muro de Amigos:** Feed dinámico que consume datos de la API para visualizar las últimas reseñas y calificaciones publicadas por el círculo de confianza del usuario.

## 6. Funcionalidades Opcionales
- **Interacción:** Sistema de "Me gusta" y reacciones en reseñas de amigos.
- **Importación Social:** Botón para guardar en tu lista personal un item recomendado por un amigo.
- **Modo Oscuro:** Interfaz adaptada para lectura nocturna mediante Tailwind.
- **Integración con APIs:** Autocompletado de datos usando APIs externas (Google Books o TMDB).

## 7. Posibles Mejoras Futuras (Roadmap)
### 7.1 Integración con APIs de Terceros
- **Auto-completado:** Implementar las APIs de **Google Books** y **The Movie Database (TMDB)** para que, al escribir el título, la app rellene automáticamente el autor/director, la sinopsis y la portada oficial.
### 7.2 Gamificación y Estadísticas
- **Dashboard de consumo:** Gráficos que muestren cuántos libros has leído al año o cuántas horas de cine has consumido.
- **Logros:** Medallas por completar sagas de películas o leer libros de más de 500 páginas.
### 7.3 Funcionalidades Offline y Multiplataforma
- **PWA (Progressive Web App):** Convertir la web en una aplicación instalable en el móvil para que funcione sin conexión (usando Service Workers).
- **Exportación de datos:** Opción para descargar toda tu biblioteca en formato CSV o PDF como copia de seguridad personal.
### 7.4 Recomendaciones por IA
- **Sugerencias inteligentes:** Un motor que analice tus calificaciones y las de tus amigos para recomendarte qué ver o leer a continuación.
