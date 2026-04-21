import { useState } from 'react';
import { Button } from '../components/Button';
import { MediaList } from '../components/MediaList'; 
import { DetailModal } from '../components/DetailModal';
import { InputField } from '../components/InputField';
import { useMedia } from '../context/MediaContext';

export const Library = () => {
  const { items, deleteItem } = useMedia(); 
  
  const [activeFilter, setActiveFilter] = useState("All");
  const [myLists, setMyLists] = useState(["All", "Favorites", "To Read", "To Watch"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleCreateList = (e: React.FormEvent) => {
    e.preventDefault();
    if (newListName.trim() && !myLists.includes(newListName)) {
      setMyLists([...myLists, newListName]);
      setNewListName('');
      setIsModalOpen(false);
    }
  };

  const filteredItems = activeFilter === "All" 
    ? items 
    : items.filter(item => item.list === activeFilter);

  return (
    <div className="p-8 space-y-8">
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-100 dark:border-gray-800 pb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">My Collection</h2>
          <p className="text-muted-light dark:text-muted text-sm italic">Manage and organize your media archive</p>
        </div>
        
        <Button variant="primary" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-sm shadow-md">
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

      {/* INFO FILTRO Y BOTÓN BORRAR LISTA */}
      <div className="pt-4">
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
              className="p-4 bg-bg-dark/50 backdrop-blur-md text-gray-300 rounded-full transition-all cursor-pointer hover:text-red-400 hover:bg-bg-dark shadow-lg border border-white/10" title="Delete list"
            >
              <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
          )}
        </div>

        <MediaList items={filteredItems} onDelete={deleteItem} />
      </div>

      <DetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New List">
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
    </div>
  );
};
