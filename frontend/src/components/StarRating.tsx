export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          className={`text-lg ${star <= rating ? 'text-amber-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};
