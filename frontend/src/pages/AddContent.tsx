import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField'; 
import { useMedia } from '../context/MediaContext';
import { useForm } from '../hooks/useForm';

type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

interface FormData {
  title: string;
  type: MediaType;
  authorOrDirector: string;
  rating: number;
  review: string;
  list: string;
  pagesOrDuration: string; 
}

export const AddContent = () => {
  const { addItem } = useMedia();
  const navigate = useNavigate();
  const [error, setError] = useState(''); 
  const { 
    values: formData, 
    handleChange, 
    setValues: setFormData, 
    resetForm 
  } = useForm<FormData>({
    title: '',
    type: 'BOOK',
    authorOrDirector: '',
    rating: 5,
    review: '',
    list: 'Favorites',
    pagesOrDuration: ''
  });

  const [myLists, setMyLists] = useState(["Favorites", "To Read", "To Watch"]);
  const [isCreatingList, setIsCreatingList] = useState(false);
  const [newListName, setNewListName] = useState('');


  const handleCreateList = () => {
    if (newListName.trim() && !myLists.includes(newListName)) {
      setMyLists([...myLists, newListName]);
      setFormData({ ...formData, list: newListName });
      setNewListName('');
      setIsCreatingList(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => { // 1. Añadimos async
    e.preventDefault();
    
    if (formData.title.trim().length < 3) {
      setError('The title must be at least 3 characters long.');
      return;
    }

    try {
      setError(''); 
      await addItem(formData); 
      
      alert(`"${formData.title}" saved!`);
      resetForm(); 
      navigate('/library');
    } catch (err) {
      setError('Failed to save. Please check if the server is running.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-card-light dark:bg-card-dark mt-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">Add New Story</h2>
      
      {/* MENSAJE DE ERROR ELEGANTE */}
      {error && (
        <div className="mb-6 p-4 bg-red-50/50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
          <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p className="text-sm font-medium text-red-700 dark:text-red-400">
            {error}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Categoría y Lista (Fila) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">Category</label>
            <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold">
              <option value="BOOK"> Book</option>
              <option value="MOVIE"> Movie</option>
              <option value="TV_SERIES"> TV Series</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">List</label>
            {!isCreatingList ? (
              <div className="flex gap-2">
                <select 
                  name="list" 
                  value={formData.list} 
                  onChange={handleChange} 
                  className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold"
                >
                  {myLists.map(list => <option key={list} value={list}>{list}</option>)}
                </select>
                <Button type="button" variant="primary" onClick={() => setIsCreatingList(true)} className="px-4 font-bold">
                  Create
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="New list..." 
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="flex-1 p-3 rounded-lg border border-primary dark:border-gold bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark outline-none"
                  autoFocus
                />
                <Button type="button" onClick={handleCreateList}>Add</Button>
                <button type="button" onClick={() => setIsCreatingList(false)} className="text-gray-400 px-1">✕</button>
              </div>
            )}
          </div>
        </div>

        <InputField 
          label="Title" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />

        {/* Datos Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField 
          label={formData.type === 'BOOK' ? 'Author' : 'Director'} 
          name="authorOrDirector" 
          value={formData.authorOrDirector} 
          onChange={handleChange} 
          placeholder="Name..." 
        />
        <InputField 
          label={
            formData.type === 'BOOK' ? 'Pages' : 
            formData.type === 'TV_SERIES' ? 'Chapters' : 'Duration (min)'
          } 
          name="pagesOrDuration" 
          value={formData.pagesOrDuration} 
          onChange={handleChange} 
          placeholder="Number..." 
        />
      </div>


        {/* Puntuación y Reseña */}
        <div>
          <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">Rating (1-5 Stars)</label>
          <input type="range" name="rating" min="1" max="5" step="1" value={formData.rating} onChange={handleChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary dark:accent-gold" />
          <div className="flex justify-between text-xs text-muted-light dark:text-muted mt-1 px-1">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">Review</label>
          <textarea 
            name="review" 
            value={formData.review} 
            onChange={handleChange} 
            rows={3} 
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold"
            placeholder="What did you think about it?"
          />
        </div>

        <div className="flex gap-4 pt-2">
  <Button type="submit" className="flex-1">
    Save
  </Button>
  
  <button 
    type="button" 
    onClick={() => navigate('/')} 
    className="flex-1 px-4 py-2 rounded-lg font-bold border-2 transition-all cursor-pointer
      /* MODO CLARO: Borde y texto vino, fondo blanco al pasar el ratón */
      border-primary text-primary hover:bg-primary hover:text-white
      /* MODO OSCURO: Fondo blanco y texto negro SIEMPRE, dorado al pasar el ratón */
      dark:bg-white dark:text-black dark:border-white
      dark:hover:bg-gold dark:hover:border-gold dark:hover:text-black"
  >
    Back
  </button>
</div>

      </form>
    </div>
  );
};
