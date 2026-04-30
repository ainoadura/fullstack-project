import { Badge } from './Badge';

interface MediaCardProps {
  id: number;
  title: string;
  type: 'BOOK' | 'MOVIE' | 'TV_SERIES';
  rating: number;
  coverUrl?: string;
  authorOrDirector?: string;
  pagesOrDuration?: string;
  onDelete: () => void;
  onSelect: () => void; 
}

export const MediaCard = ({ title, type, rating, coverUrl, authorOrDirector, pagesOrDuration, onDelete, onSelect }: MediaCardProps) => {
  return (
    <div 
      onClick={onSelect} 
      className="group relative bg-card-light dark:bg-card-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
    >
      
      {/* BOTÓN DE BORRAR */}
      <button 
        className="absolute top-2 right-2 z-10 p-2 bg-bg-dark/50 backdrop-blur-md text-gray-300 rounded-full sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:text-red-400 hover:bg-bg-dark shadow-lg border border-white/10"
        title="Delete"
        onClick={(e) => {
          e.stopPropagation(); 
          if(confirm(`¿Borrar "${title}"?`)) {
            onDelete(); 
          }
        }}
      >
        <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>

      {/* Imagen */}
      <div className="h-48 bg-gray-200 dark:bg-secondary/50 overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 italic">
            No cover available
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge type={type} />
          <span className="text-gold font-bold">★ {rating}</span>
        </div>
        <h3 className="font-bold text-lg truncate text-text-light dark:text-text-dark">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-muted">{authorOrDirector}</p>

        {pagesOrDuration && (
          <p className="text-xs text-muted-light dark:text-muted/60 mt-1 italic">
            {type === 'BOOK' ? `${pagesOrDuration} pages` : `${pagesOrDuration} min`}
          </p>
        )}
      </div>
    </div>
  );
};

