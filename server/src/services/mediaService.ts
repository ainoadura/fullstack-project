interface MediaItem {
  id: number;
  title: string;
  type: string;
  authorOrDirector: string;
  rating: number;
  [key: string]: any;
}

let mediaItems: MediaItem[] = [];

export const fetchAllItems = (): MediaItem[] => {
  return mediaItems;
};

export const saveItem = (item: Omit<MediaItem, 'id'>): MediaItem => {
  const newItem: MediaItem = { ...item, id: Date.now() } as MediaItem;
  mediaItems.push(newItem);
  return newItem;
};

export const updateItem = (id: number, data: Partial<MediaItem>): MediaItem | null => {
  const index = mediaItems.findIndex(item => item.id === id);
  if (index === -1) return null;

  mediaItems[index] = { ...mediaItems[index], ...data, id }; 
  return mediaItems[index]; 
};

export const removeItem = (id: number): boolean => {
  const initialLength = mediaItems.length;
  mediaItems = mediaItems.filter(item => item.id !== id);
  return mediaItems.length < initialLength;
};
