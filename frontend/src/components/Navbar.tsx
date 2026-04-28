import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle'; 
import { useScroll } from '../hooks/useScroll';

export const Navbar = () => {
  // Usamos el hook que creamos para saber si el usuario ha bajado la página
  const isScrolled = useScroll(40); 

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gold shadow-2xl py-3 border-b border-primary/20' // AL BAJAR: Fondo Dorado
        : 'bg-primary py-6 shadow-lg' // ARRIBA: Fondo Vino
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
        <div className={`flex gap-10 items-center font-bold text-xs uppercase tracking-widest ${
          isScrolled ? 'text-white' : 'text-white drop-shadow-md'
        }`}>
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <Link to="/library" className="hover:text-gold transition-colors">Library</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
