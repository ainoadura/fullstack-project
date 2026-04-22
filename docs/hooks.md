# ⚓ Custom Hooks - Frame & Page

En este proyecto se han implementado 3 Custom Hooks reutilizables para abstraer la lógica de los componentes, mejorar la legibilidad y cumplir con los principios de optimización de React.

## 1. `useForm`
Ubicación: `src/hooks/useForm.ts`

**Propósito:** Centralizar la lógica de los formularios. Gestiona el estado de los inputs, los cambios de valor (incluyendo la conversión de tipos como el rating a número) y la limpieza del formulario.

- **Values:** Objeto con el estado actual del formulario.
- **handleChange:** Función genérica para manejar eventos `onChange` en inputs, selects y textareas.
- **resetForm:** Restablece el formulario a sus valores iniciales.

---

## 2. `useToggle`
Ubicación: `src/hooks/useToggle.ts`

**Propósito:** Manejar estados booleanos simples (on/off). Se utiliza principalmente para la apertura/cierre de modales y para el cambio de tema (Dark Mode).

- **state:** El valor booleano actual.
- **toggle:** Función memorizada con `useCallback` que invierte el estado actual. Al estar memorizada, evita renderizados innecesarios en componentes hijos.

---

## 3. `useLocalStorage`
Ubicación: `src/hooks/useLocalStorage.ts`

**Propósito:** Sincronizar un estado de React con el `localStorage` del navegador de forma automática. Se ha utilizado para que las listas personalizadas de la librería persistan incluso si se refresca la página.

- **Sincronización:** Al inicializarse, busca si ya existe un valor guardado con la "key" proporcionada.
- **Persistencia:** Cada vez que el estado cambia, el hook actualiza automáticamente el valor en el almacenamiento local del navegador.

