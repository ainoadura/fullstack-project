import React, { useState } from 'react';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField'; // Importamos tu componente tipado

type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

interface FormData {
  title: string;
  type: MediaType;
  authorOrDirector: string;
  rating: number;
  review: string;
}

export const AddContent = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    type: 'BOOK',
    authorOrDirector: '',
    rating: 5,
    review: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving new content:', formData);
    alert(`Success! "${formData.title}" has been saved. 🚀`);
  };

  return (
    /* bg-card-light y dark:bg-card-dark (Color 2) */
    <div className="max-w-2xl mx-auto p-8 bg-card-light dark:bg-card-dark mt-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">Add New Content</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selector */}
        <div>
          <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">Category</label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary dark:focus:ring-gold outline-none transition-all"
          >
            <option value="BOOK">📖 Book</option>
            <option value="MOVIE">🎬 Movie</option>
            <option value="TV_SERIES">📺 TV Series</option>
          </select>
        </div>

        {/* Title usando tu InputField */}
        <InputField 
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title..."
          required
        />

        {/* Author/Director usando tu InputField dinámico */}
        <InputField 
          label={formData.type === 'BOOK' ? 'Author' : 'Director'}
          name="authorOrDirector"
          value={formData.authorOrDirector}
          onChange={handleChange}
          placeholder={formData.type === 'BOOK' ? 'Author name' : 'Director name'}
        />

        {/* Rating */}
        <InputField 
          label="Rating (1-5)"
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />

        {/* Review */}
        <div>
          <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">Your Review</label>
          <textarea 
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold transition-all"
            placeholder="Write what you thought..."
          ></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1">Save Content</Button>
          <Button 
            type="button" 
            variant="secondary" 
            onClick={() => setFormData({title:'', type:'BOOK', authorOrDirector:'', rating:5, review:''})}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
