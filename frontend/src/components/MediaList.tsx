import type { MediaItem } from '../types';
import { MediaCard } from './MediaCard';

interface MediaListProps {
  items: MediaItem[];
}

export const MediaList = ({ items, onDelete }: { items: any[], onDelete: (id: number) => void }) => {
  if (items.length === 0) return <div className="text-center p-10 dark:text-white">Empty library.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <MediaCard 
          key={item.id} 
          {...item} 
          onDelete={() => onDelete(item.id)} // Pasamos la orden de borrar
        />
      ))}
    </div>
  );
};

