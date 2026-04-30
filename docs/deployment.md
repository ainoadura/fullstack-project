# 🚀 Estrategia de Despliegue - Frame & Page

Este documento describe el proceso de puesta en producción de la arquitectura Fullstack, utilizando servicios de nube optimizados para cada capa del proyecto.

## 🏗️ Arquitectura Distribuida
Se ha optado por un despliegue desacoplado para maximizar el rendimiento y la escalabilidad:

- **Frontend:** Alojado en **Vercel**. Aprovecha su red de entrega de contenido (CDN) para una carga ultrarrápida de la interfaz React.
- **Backend:** Alojado en **Render**. Gestiona la lógica de negocio y la persistencia de datos mediante un servicio de Node.js/Express.

## 🔧 Configuración del Servidor (Render)
Para el despliegue del backend, se configuraron los siguientes parámetros:
- **Root Directory:** `server`
- **Build Command:** `npm install && npm run build` (compilación de TypeScript a JS).
- **Start Command:** `npm run start` (ejecución desde la carpeta `dist`).
- **Gestión de Puertos:** Uso de la variable de entorno `PORT` proporcionada por el servicio.

## 🌐 Configuración del Cliente (Vercel)
El frontend se conecta a la API mediante **variables de entorno**:
- **Root Directory:** `frontend`
- **Variable `VITE_API_URL`:** Almacena la URL base de la API en Render (`https://onrender.com`).
- **Build Pipeline:** El despliegue es automático mediante integración continua (CI) con la rama `main` de GitHub.

## 🚦 Consideraciones del Plan Gratuito
Dado el uso del plan *Free* de Render, el servidor entra en estado de hibernación tras periodos de inactividad. Se ha implementado un sistema de **feedback visual (Spinners)** en el frontend para gestionar la latencia de "despertado" (aproximadamente 30-50 segundos) y garantizar una buena experiencia de usuario.
