import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle'; 

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-8 py-4 flex justify-between items-center transition-colors">
      {/* Logo: Color 1 (Primary) en claro y Color 5 (Gold) en oscuro */}
      <div className="text-xl font-bold text-primary dark:text-gold tracking-tight">
        MyLibrary
      </div>
      
      <div className="flex gap-6 items-center">
        <div className="flex gap-8 font-medium">
          {/* Links: Hover con Color 1 en claro y Color 5 en oscuro */}
          <Link 
            to="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-gold transition-colors"
          >
            Feed
          </Link>
          <Link 
            to="/library" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-gold transition-colors"
          >
            My Library
          </Link>
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
};
