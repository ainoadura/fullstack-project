import { MediaCard } from '../components/MediaCard';
import { useMedia } from '../context/MediaContext';
import type { MediaItem } from '../types';

export const Home = () => {
  const { items, deleteItem } = useMedia();
  const latestItems = items.slice(-3).reverse();

  return (
    <div className="space-y-12 pb-10">
      <section className="relative h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl">
        <img 
          src="/header.jpg" 
          alt="My Media Library" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 bg-linear-to-r from-[#4B1139]/90 via-[#4B1139]/50 to-transparent flex flex-col justify-center px-12 text-white">
          <h1 className="font-extrabold mb-4 tracking-tight leading-tight">
            <span className="text-2xl block mb-1">
              Welcome to
            </span>
            
            <span className="text-6xl text-gold">
              Frame & Page
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-md mb-8 leading-relaxed">
            All your favorite books, movies, and TV series organized in one beautiful space.
          </p>
        </div>
      </section>

      <section className="px-2">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">Recently Added</h2>
        
        {items.length === 0 ? (
          <div className="p-10 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl text-center text-gray-400">
            No updates yet. Go to "Add Content" to start your collection!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestItems.map((item: MediaItem) => (
              <MediaCard 
                key={item.id} 
                {...item} 
                onDelete={() => deleteItem(item.id)} 
                onSelect={() => {}}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
