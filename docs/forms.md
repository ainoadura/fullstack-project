# 📝 Formularios e Interacción - Frame & Page

El proyecto utiliza formularios controlados para garantizar que el estado de React sea la "única fuente de verdad" (*Single Source of Truth*).

## 🛠️ Gestión de Inputs
Se ha implementado un **Custom Hook (`useForm`)** que automatiza la captura de datos:
- Maneja cambios en `input`, `select` y `textarea`.
- Convierte automáticamente tipos de datos (ej. el rating de *string* a *number*).

## ✅ Validación y Feedback
Para mejorar la experiencia de usuario (UX), se han implementado las siguientes medidas:
1. **Validación en tiempo real:** Uso del atributo `required` de HTML5 en campos críticos.
2. **Validación lógica:** Comprobación de longitud mínima en el título antes del envío.
3. **Mensajes de error:** Notificaciones visuales dinámicas cuando la validación falla.
4. **Confirmación:** Uso de `alert()` o redirecciones programáticas para confirmar el éxito de la operación.

## 🔄 Flujo de Interacción
1. El usuario rellena los campos.
2. El estado se actualiza mediante `handleChange`.
3. Al hacer clic en "Save", se valida la información.
4. Si es válida, se envía al estado global y se redirige al usuario.
