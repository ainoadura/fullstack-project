import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-black text-primary dark:text-gold opacity-20 absolute select-none">
        404
      </h1>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          Lost in the Archive?
        </h2>
        <p className="text-muted-light dark:text-muted mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved to another shelf.
        </p>
        <Link to="/">
          <Button className="px-8 py-3">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};
