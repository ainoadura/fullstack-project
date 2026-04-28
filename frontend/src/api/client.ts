import type { MediaItem, CreateMediaDTO } from '../types';

const API_URL = 'http://localhost:5000/api/media';

export const mediaClient = {
  // GET - Obtener todos
  async getAll(): Promise<MediaItem[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch media');
    return response.json();
  },

  // POST - Crear uno nuevo
  async create(item: CreateMediaDTO): Promise<MediaItem> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error('Failed to create item');
    return response.json();
  },

  // DELETE - Borrar
  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete item');
  },

  // PUT - Actualizar (opcional pero recomendado para el punto 12)
  async update(id: number, item: Partial<CreateMediaDTO>): Promise<MediaItem> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return response.json();
  }
};
