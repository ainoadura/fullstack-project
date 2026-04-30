import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle'; 
import { useScroll } from '../hooks/useScroll';

export const Navbar = () => {
  const isScrolled = useScroll(40); 

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gold shadow-2xl py-1.5 border-b border-primary/20' // AL BAJAR: Fondo Dorado
        : 'bg-primary py-3 shadow-lg' // ARRIBA: Fondo Vino
    }`}>
      <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
        
        {/* LOGO / TÍTULO */}
        <Link 
          to="/" 
          className={`text-2xl font-black tracking-tighter transition-all duration-500 ${
            isScrolled 
              ? 'text-primary' // AL BAJAR: Letra Vino (sobre fondo dorado)
              : 'text-gold'    // ARRIBA: Letra Dorada (sobre fondo vino)
          }`}
        >
          FRAME & PAGE
        </Link>

        {/* ENLACES */}
        <div className={`flex gap-10 items-center font-bold text-xs uppercase tracking-widest transition-colors duration-500 ${
          isScrolled ? 'text-primary/80' : 'text-gold'
        }`}>
          <Link 
            to="/" 
            className={`transition-colors ${
              isScrolled 
                ? 'hover:text-primary text-primary' // Al bajar: Letras vino, y más oscuras al pasar el ratón
                : 'hover:text-white text-gold'      // Arriba: Letras doradas, blancas al pasar el ratón
            }`}
          >
            Home
          </Link>
          
          <Link 
            to="/library" 
            className={`transition-colors ${
              isScrolled 
                ? 'hover:text-primary text-primary' 
                : 'hover:text-white text-gold'
            }`}
          >
            Library
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
