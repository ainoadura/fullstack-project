import React, { createContext, useContext, useState } from 'react';

interface MediaItem {
  id: number;
  title: string;
  type: 'BOOK' | 'MOVIE' | 'TV_SERIES';
  rating: number;
  authorOrDirector: string;
  list: string;
  review?: string;
}

interface MediaContextType {
  items: MediaItem[];
  addItem: (item: MediaItem) => void;
  deleteItem: (id: number) => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<MediaItem[]>([]); // Empezamos vacío

  const addItem = (item: MediaItem) => {
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <MediaContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia debe ser usado dentro de un MediaProvider');
  }
  return context;
};
