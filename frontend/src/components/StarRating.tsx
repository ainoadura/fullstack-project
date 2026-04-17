export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          /* 
             - Estrellas rellenas: Usan text-gold (Color 5)
             - Estrellas vacías: Gris suave en claro / Color 4 (Muted) muy apagado en oscuro
          */
          className={`text-lg transition-colors ${
            star <= rating 
              ? 'text-gold' 
              : 'text-gray-300 dark:text-muted/30'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};
