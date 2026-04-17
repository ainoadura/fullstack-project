import { Button } from '../components/Button';
import { MediaCard } from '../components/MediaCard';
import { Link } from 'react-router-dom';

export const Home = () => {
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
          <div className="flex gap-4">
            <Link to="/library">
              <Button className="px-8 py-3">
                View My Library
              </Button>
            </Link>
            <Link to="/add">
              <Button variant="secondary" className="px-8 py-3 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border-none">
                Add Review
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-2">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">Recently Added</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MediaCard 
            title="The Lord of the Rings" 
            type="BOOK" 
            rating={5} 
            authorOrDirector="J.R.R. Tolkien"
          />
          <MediaCard 
            title="Pulp Fiction" 
            type="MOVIE" 
            rating={4} 
            authorOrDirector="Quentin Tarantino"
          />
          <MediaCard 
            title="The Bear" 
            type="TV_SERIES" 
            rating={5} 
            authorOrDirector="Christopher Storer"
          />
        </div>
      </section>
    </div>
  );
};
