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
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 italic">
            No cover available
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge type={type} />
          <span className="text-amber-500 font-bold">★ {rating}</span>
        </div>
        <h3 className="font-bold text-lg truncate">{title}</h3>
        <p className="text-sm text-gray-500">{authorOrDirector}</p>
      </div>
    </div>
  );
};
