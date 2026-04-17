import type { MediaItem } from '../types';
import { MediaCard } from './MediaCard';

interface MediaListProps {
  items: MediaItem[];
}

export const MediaList = ({ items }: MediaListProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center p-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 text-lg">Your collection is empty. Start adding some content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
};
