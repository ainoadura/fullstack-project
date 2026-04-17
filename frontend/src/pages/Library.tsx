import { MediaCard } from '../components/MediaCard';

const DUMMY_DATA = [
  { id: 1, title: "The Lord of the Rings", type: "BOOK" as const, rating: 5, authorOrDirector: "J.R.R. Tolkien" },
  { id: 2, title: "Pulp Fiction", type: "MOVIE" as const, rating: 4, authorOrDirector: "Quentin Tarantino" },
  { id: 3, title: "Breaking Bad", type: "TV_SERIES" as const, rating: 5, authorOrDirector: "Vince Gilligan" },
  { id: 4, title: "1984", type: "BOOK" as const, rating: 4, authorOrDirector: "George Orwell" },
];

export const Library = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">My Collection</h2>
          <p className="text-muted-light dark:text-muted text-sm italic">
            Explore your personal media archive
          </p>
        </div>
        <span className="text-primary dark:text-gold font-medium text-sm">
          {DUMMY_DATA.length} items saved
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DUMMY_DATA.map((item) => (
          <MediaCard 
            key={item.id}
            title={item.title}
            type={item.type}
            rating={item.rating}
            authorOrDirector={item.authorOrDirector}
          />
        ))}
      </div>
    </div>
  );
};
