let mediaItems: any[] = [];

export const fetchAllItems = () => {
  return mediaItems;
};

export const saveItem = (item: any) => {
  const newItem = { ...item, id: Date.now() };
  mediaItems.push(newItem);
  return newItem;
};

export const updateItem = (id: number, data: any) => {
  const index = mediaItems.findIndex(item => item.id === id);
  if (index === -1) return null;

  // Actualizamos el ítem
  mediaItems[index] = { ...mediaItems[index], ...data, id }; 
  // ¡IMPORTANTE!: Hay que devolver el ítem actualizado
  return mediaItems[index]; 
};

export const removeItem = (id: number) => {
  const initialLength = mediaItems.length;
  mediaItems = mediaItems.filter(item => item.id !== id);
  return mediaItems.length < initialLength;
};
