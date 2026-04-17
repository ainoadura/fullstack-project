import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const DetailModal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* 
          Contenedor del Modal: 
          Light: bg-white
          Dark: bg-card-dark (Tu Color 2 profundo) 
      */}
      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in duration-300 border border-gray-100 dark:border-gray-800">
        
        {/* Header del Modal */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
            {title}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-primary dark:hover:text-gold transition-colors text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Body del Modal */}
        <div className="p-6 text-text-light dark:text-text-dark">
          {children}
        </div>

        {/* Footer del Modal */}
        <div className="p-4 bg-gray-50 dark:bg-bg-dark/50 flex justify-end">
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
