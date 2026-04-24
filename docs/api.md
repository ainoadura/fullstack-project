# 📡 Especificación de la API - Frame & Page

Este documento detalla los puntos de entrada (endpoints) de la API y los códigos de respuesta implementados para garantizar una comunicación robusta.

## 🏗️ Endpoints y Métodos HTTP


| Método | Ruta | Acción | Código de Éxito |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/media` | Obtener toda la biblioteca | `200 OK` |
| **POST** | `/api/media` | Crear nueva publicación | `201 Created` |
| **PUT** | `/api/media/:id` | Editar publicación existente | `200 OK` |
| **DELETE** | `/api/media/:id` | Eliminar publicación | `200 OK` |

---

## 🚦 Gestión de Respuestas y Códigos HTTP

A continuación se muestran las pruebas realizadas en **Thunder Client** que validan el comportamiento del servidor:

### 1. Obtener Datos (`200 OK`)
Respuesta exitosa al consultar la lista completa de ítems.
![Éxito GET 200](./img/succes_200.png)

### 2. Crear Contenido (`201 Created`)
Respuesta al enviar un JSON válido. El servidor retorna el objeto con su nuevo ID.
![Éxito POST 201](./img/success_201.png)

### 3. Error de Validación (`400 Bad Request`)
El servidor rechaza la petición si faltan campos obligatorios como el título.
![Error Validación 400](./img/error_400.png)

### 4. Borrado Exitoso (`200 OK`)
Confirmación de que el ítem con el ID especificado ha sido eliminado.
![Borrado OK](./img/delete_200_ok.png)

### 5. Recurso no Encontrado (`404 Not Found`)
Respuesta al intentar borrar o editar un ID que ya no existe en el sistema.
![Error 404](./img/delete_404.png)

