// Definimos el tipo para reusarlo
export type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

// 1. Definimos la INTERFAZ para las props (Punto clave del ejercicio)
interface BadgeProps {
  type: MediaType;
}

// 2. Aplicamos la interfaz al componente
export const Badge = ({ type }: BadgeProps) => {
  const config = {
    BOOK: { label: 'Book', styles: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    MOVIE: { label: 'Movie', styles: 'bg-purple-100 text-purple-700 border-purple-200' },
    TV_SERIES: { label: 'TV Series', styles: 'bg-amber-100 text-amber-700 border-amber-200' }
  };

  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${config[type].styles}`}>
      {config[type].label}
    </span>
  );
};
