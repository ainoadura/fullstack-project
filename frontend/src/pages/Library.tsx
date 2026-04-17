import { MediaCard } from '../components/MediaCard';

const DUMMY_DATA = [
  { id: 1, title: "The Lord of the Rings", type: "BOOK" as const, rating: 5, author: "J.R.R. Tolkien" },
  { id: 2, title: "Pulp Fiction", type: "MOVIE" as const, rating: 4, author: "Quentin Tarantino" },
  { id: 3, title: "Breaking Bad", type: "TV_SERIES" as const, rating: 5, author: "Vince Gilligan" },
  { id: 4, title: "1984", type: "BOOK" as const, rating: 4, author: "George Orwell" },
];

export const Library = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">My Collection</h2>
        <span className="text-gray-500">{DUMMY_DATA.length} items saved</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DUMMY_DATA.map((item) => (
          <MediaCard 
            key={item.id}
            title={item.title}
            type={item.type}
            rating={item.rating}
            authorOrDirector={item.author}
          />
        ))}
      </div>
    </div>
  );
};
