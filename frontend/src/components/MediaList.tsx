import type { MediaItem } from '../types';
import { MediaCard } from './MediaCard';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Importamos motion

export const MediaList = ({ items, onDelete }: { items: MediaItem[], onDelete: (id: number) => void }) => {
  if (items.length === 0) {
    return <div className="text-center p-10 dark:text-white italic opacity-50">Empty library.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, scale: 0.95 }} 
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05 
            }}
          >
            <MediaCard 
              {...item} 
              onDelete={() => onDelete(item.id)} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
