# 🌐 Capa de Red y Single Source of Truth

En esta fase se ha migrado la persistencia de datos desde el cliente (LocalStorage) hacia un **Backend centralizado**, estableciendo la API como la única fuente de verdad (*Single Source of Truth*).

## 🏗️ Implementación del Cliente API
Se ha desarrollado un cliente tipado en `src/api/client.ts` que utiliza `fetch` para gestionar las peticiones asíncronas. Este cliente asegura que los datos recibidos cumplen con las interfaces de TypeScript definidas.

## 🚦 Gestión de Estados de Red
El `MediaContext` ha sido actualizado para gestionar el ciclo de vida completo de las peticiones:
- **Carga (Loading):** Feedback visual mediante spinners mientras se esperan los datos.
- **Éxito:** Renderizado dinámico de la colección una vez recibida del servidor.
- **Error:** Captura de excepciones con mensajes descriptivos y opción de reintento.

## 🧹 Eliminación de Persistencia Local
Se ha eliminado toda dependencia de `localStorage` para el almacenamiento de los ítems de la biblioteca. Esto garantiza la integridad de los datos y permite que la aplicación escale a un entorno multi-usuario en el futuro.
