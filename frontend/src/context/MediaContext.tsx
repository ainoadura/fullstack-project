import React, { createContext, useContext, useState, useEffect } from 'react';
import { mediaClient } from '../api/client';
import type { MediaItem, CreateMediaDTO } from '../types';

interface MediaContextType {
  items: MediaItem[];
  isLoading: boolean;
  error: string | null;
  addItem: (item: CreateMediaDTO) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
  loadMedia: () => Promise<void>;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMedia = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await mediaClient.getAll();
      setItems(data);
    } catch (err) {
      setError("Could not load your collection. Please check if the server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const addItem = async (newItem: CreateMediaDTO) => {
    try {
      const savedItem = await mediaClient.create(newItem);
      setItems((prev) => [...prev, savedItem]);
    } catch (error) {
      console.error("Error adding media:", error);
    }
  };
 
  const deleteItem = async (id: number) => {
    try {
      await mediaClient.delete(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  const contextValue: MediaContextType = {
    items,
    isLoading,
    error,
    addItem,
    deleteItem,
    loadMedia
  };

  return (
    <MediaContext.Provider value={contextValue}>
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
