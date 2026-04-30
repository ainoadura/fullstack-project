import { useToggle } from '../hooks/useToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useState, useMemo, useCallback } from 'react';
import { Button } from '../components/Button';
import { MediaList } from '../components/MediaList'; 
import { DetailModal } from '../components/DetailModal'; 
import { MediaDetailModal } from '../components/MediaDetailModal'; 
import { InputField } from '../components/InputField';
import { useMedia } from '../context/MediaContext';
import type { MediaItem } from '../types';

export const Library = () => {
  const { items, isLoading, error, loadMedia, deleteItem } = useMedia(); 
  const [activeFilter, setActiveFilter] = useState("All");
  const [myLists, setMyLists] = useLocalStorage('library-lists', ["All", "Favorites", "To Read", "To Watch"]);
  const [isModalOpen, toggleModal] = useToggle(false);  
  const [newListName, setNewListName] = useState('');

  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const handleCreateList = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newListName.trim() && !myLists.includes(newListName)) {
      setMyLists([...myLists, newListName]);
      setNewListName('');
      toggleModal(); 
    }
  }, [newListName, myLists, toggleModal, setMyLists]);

  const filteredItems = useMemo(() => {
    return activeFilter === "All" 
      ? items 
      : items.filter((item: MediaItem) => item.list === activeFilter); 
  }, [items, activeFilter]);

  return (
    <div className="p-8 space-y-8">
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-100 dark:border-gray-800 pb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">My Collection</h2>
          <p className="text-muted-light dark:text-muted text-sm italic">Manage and organize your media archive</p>
        </div>
        
        <Button variant="primary" onClick={toggleModal} className="flex items-center gap-2 text-sm shadow-md">
          <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Create List
        </Button>
      </div>

      {/* FILTROS */}
      <div className="flex flex-wrap gap-3">
        {myLists.map((listName) => (
          <button
            key={listName}
            onClick={() => setActiveFilter(listName)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border
              ${activeFilter === listName 
                ? 'bg-primary dark:bg-gold text-white dark:text-bg-dark border-transparent shadow-md' 
                : 'bg-transparent text-muted-light dark:text-muted border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-gold'
              }`}
          >
            {listName}
          </button>
        ))}
      </div>

      <div className="pt-4 min-h-[400px]">
        {isLoading && (
          <div className="flex flex-col items-center py-20 animate-pulse">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-muted-light dark:text-muted font-medium italic">Opening the archive...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 p-8 rounded-3xl text-center max-w-lg mx-auto">
             <div className="text-red-500 mb-4 flex justify-center">
                <svg xmlns="http://w3.org" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
             </div>
             <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-2">Connection Error</h3>
             <p className="text-red-600 dark:text-red-300/70 mb-6 text-sm">{error}</p>
             <Button onClick={loadMedia} variant="primary" className="px-10">Re-open Archive</Button>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs text-muted-light dark:text-muted uppercase tracking-tighter">
                Showing: <span className="font-bold text-primary dark:text-gold">{activeFilter}</span> ({filteredItems.length})
              </p>
              {activeFilter !== "All" && (
                <button 
                  onClick={() => {
                    if(confirm(`Delete the list "${activeFilter}"?`)) {
                      setMyLists(myLists.filter(l => l !== activeFilter));
                      setActiveFilter("All");
                    }
                  }} 
                  className="text-red-500 hover:text-red-700 text-xs font-bold"
                >
                  DELETE LIST
                </button>
              )}
            </div>

            <MediaList items={filteredItems} onDelete={deleteItem} onSelect={setSelectedItem} />
          </>
        )}
      </div>

      <DetailModal isOpen={isModalOpen} onClose={toggleModal} title="New List">
        <form onSubmit={handleCreateList} className="space-y-4">
          <InputField 
            label="Name of your list" 
            value={newListName} 
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="e.g. Science Fiction" 
            autoFocus 
          />
          <Button type="submit" className="w-full">Create</Button>
        </form>
      </DetailModal>

       <MediaDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};