import type { MediaItem } from '../types';
import { MediaCard } from './MediaCard';

interface MediaListProps {
  items: MediaItem[];
}

export const MediaList = ({ items }: MediaListProps) => {
  if (items.length === 0) {
    return (
      /* 
         Estado Vacío: 
         Light: bg-gray-50 con borde gris
         Dark: bg-secondary/20 con borde muted (Color 4) 
      */
      <div className="text-center p-20 bg-gray-50 dark:bg-secondary/10 rounded-2xl border-2 border-dashed border-gray-200 dark:border-muted/30 transition-colors">
        <p className="text-muted-light dark:text-muted text-lg font-medium">
          Your collection is empty. Start adding some content!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        /* Al usar {...item} pasamos todas las propiedades tipadas a MediaCard */
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
};
