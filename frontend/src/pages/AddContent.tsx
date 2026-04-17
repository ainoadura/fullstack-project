import React, { useState } from 'react';
import { Button } from '../components/Button';

type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

interface FormData {
  title: string;
  type: MediaType;
  authorOrDirector: string;
  rating: number;
  review: string;
}

export const AddContent = () => {
  // 1. Estado local para el formulario
  const [formData, setFormData] = useState<FormData>({
    title: '',
    type: 'BOOK',
    authorOrDirector: '',
    rating: 5,
    review: ''
  });

  // 2. Manejador de eventos para los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  // 3. Manejador del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving new content:', formData);
    alert('Content saved to console! 🚀');
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white mt-10 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Content</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="BOOK">📖 Book</option>
            <option value="MOVIE">🎬 Movie</option>
            <option value="TV_SERIES">📺 TV Series</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title..." 
            className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500" 
            required
          />
        </div>

        {/* Dynamic Label based on Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {formData.type === 'BOOK' ? 'Author' : 'Director'}
          </label>
          <input 
            type="text" 
            name="authorOrDirector"
            value={formData.authorOrDirector}
            onChange={handleChange}
            placeholder={formData.type === 'BOOK' ? 'Author name' : 'Director name'} 
            className="w-full p-3 rounded-lg border border-gray-300" 
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Rating (1-5)</label>
          <input 
            type="number" 
            name="rating"
            min="1" 
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300" 
          />
        </div>

        {/* Review */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
          <textarea 
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            placeholder="Write what you thought..."
          ></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1">Save Content</Button>
          <Button type="button" variant="secondary" onClick={() => setFormData({title:'', type:'BOOK', authorOrDirector:'', rating:5, review:''})}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
