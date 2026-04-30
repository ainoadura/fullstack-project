# 🧠 Reflexión Final y Retrospectiva - Frame & Page

Este documento cierra el ciclo de desarrollo del proyecto, analizando los aprendizajes, los retos técnicos y la metodología de trabajo empleada.

## 🎓 Aprendizajes Principales
A lo largo de estas semanas, el mayor hito ha sido la transición de un desarrollo puramente estático a una **arquitectura Fullstack real**. Los puntos clave aprendidos han sido:
- **Comunicación Asíncrona:** Entender el ciclo de vida de una petición desde que nace en un componente de React hasta que el servidor Node.js responde.
- **Tipado compartido:** La importancia de usar TypeScript en ambos extremos para evitar errores de concordancia de datos.
- **Single Source of Truth:** Migrar la persistencia de LocalStorage a una API para centralizar la verdad de los datos.

## 🔗 Conexión de Capas
La arquitectura se ha estructurado mediante una **Capa de Red** dedicada:
1. El **Backend** expone una API RESTful con Express.
2. El **Frontend** utiliza un cliente tipado (`client.ts`) que consume estos Endpoints.
3. El **Context API** de React actúa como puente, gestionando no solo los datos, sino también los estados de carga y error para mejorar la UX.

## 🛠️ Desafíos y Soluciones
Los principales problemas encontrados fueron:
- **Integración y CORS:** Configurar el servidor para que aceptara peticiones desde el dominio de Vercel fue un reto inicial de seguridad.
- **Sincronización de Tipos:** Ajustar el objeto que envía el frontend (DTO) para que no incluyera el ID (responsabilidad del backend) fue clave para el éxito del despliegue.
- **Despliegue Monorepo:** Configurar los "Root Directories" en Vercel y Render para un repositorio que contenía ambas carpetas.

## 🤖 Uso de Inteligencia Artificial
La IA ha sido una herramienta de **co-programación** fundamental:
- **Debugging:** Ayudó a identificar errores de tipos (TS6133) y problemas de desbordamiento visual en el Navbar durante el scroll.
- **Refactorización:** Permitió pasar rápidamente de un prototipo con LocalStorage a una integración limpia con la API.
- **Documentación:** Facilitó la creación de un estándar OpenAPI y la estructuración de estos archivos Markdown.

## 🌟 Conclusión
Frame & Page no es solo un gestor de medios; es la prueba de una metodología de trabajo estructurada y profesional. El resultado es una aplicación resiliente, escalable y con una experiencia de usuario cuidada hasta el último detalle visual.
