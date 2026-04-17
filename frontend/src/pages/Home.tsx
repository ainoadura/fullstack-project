import { Button } from '../components/Button';
import { MediaCard } from '../components/MediaCard';

export const Home = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Componentes de Prueba</h2>
      
      <div className="flex gap-4">
        <Button>Guardar</Button>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="danger">Eliminar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MediaCard 
          title="El Resplandor" 
          type="BOOK" 
          rating={5} 
          authorOrDirector="Stephen King"
        />
        <MediaCard 
          title="The Bear" 
          type="TV_SERIES" 
          rating={5} 
          authorOrDirector="Christopher Storer"
        />
      </div>
    </div>
  );
};
