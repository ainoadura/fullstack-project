import { Badge } from './Badge';

interface MediaCardProps {
  title: string;
  type: 'BOOK' | 'MOVIE' | 'TV_SERIES';
  rating: number;
  coverUrl?: string;
  authorOrDirector?: string;
}

export const MediaCard = ({ title, type, rating, coverUrl, authorOrDirector }: MediaCardProps) => {
  return (
    /* bg-card-light y dark:bg-card-dark (Color 2 profundo) */
    <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className="h-48 bg-gray-200 dark:bg-secondary/50 overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 italic">
            No cover available
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge type={type} />
          {/* text-gold es tu Color 5 (Dorado) */}
          <span className="text-gold font-bold">★ {rating}</span>
        </div>
        {/* text-text-light y dark:text-text-dark */}
        <h3 className="font-bold text-lg truncate text-text-light dark:text-text-dark">{title}</h3>
        {/* text-muted-light y dark:text-muted (Color 4) */}
        <p className="text-sm text-gray-500 dark:text-muted">{authorOrDirector}</p>
      </div>
    </div>
  );
};
