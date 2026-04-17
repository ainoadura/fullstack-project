export type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

interface BadgeProps {
  type: MediaType;
}

export const Badge = ({ type }: BadgeProps) => {
  const config = {
    BOOK: { 
      label: 'Book', 
      styles: 'bg-muted-light/20 text-muted-light border-muted-light/30 dark:bg-muted/20 dark:text-muted dark:border-muted/40' 
    },
    MOVIE: { 
      label: 'Movie', 
      styles: 'bg-accent-light/20 text-accent-light border-accent-light/30 dark:bg-accent/20 dark:text-accent dark:border-accent/40' 
    },
    TV_SERIES: { 
      label: 'TV Series', 
      styles: 'bg-gold/10 text-gold border-gold/30 dark:bg-gold/20 dark:text-gold dark:border-gold/40' 
    }
  };

  return (
    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border ${config[type].styles} transition-colors`}>
      {config[type].label}
    </span>
  );
};
