import { motion, AnimatePresence } from 'framer-motion';
import type { MediaItem } from '../types';

export const MediaDetailModal = ({ item, onClose }: { item: MediaItem | null, onClose: () => void }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-bg-dark border border-gold/20 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold tracking-widest uppercase rounded-full">
                {item.type}
              </span>
              <button onClick={onClose} className="text-muted hover:text-gold transition-colors">✕</button>
            </div>
            
            <h2 className="text-3xl font-black text-primary dark:text-gold">{item.title}</h2>
            <p className="text-lg font-medium opacity-80 italic">by {item.authorOrDirector}</p>
            
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/10 text-sm">
              <div>
                <p className="text-muted uppercase text-[10px] font-bold">Rating</p>
                <p className="text-gold">{'★'.repeat(item.rating)}{'☆'.repeat(5-item.rating)}</p>
              </div>
              <div>
                <p className="text-muted uppercase text-[10px] font-bold">Length</p>
                <p>{item.pagesOrDuration || 'N/A'}</p>
              </div>
            </div>

            {item.review && (
              <div>
                <p className="text-muted uppercase text-[10px] font-bold mb-2">My Review</p>
                <p className="text-sm leading-relaxed opacity-90">{item.review}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
