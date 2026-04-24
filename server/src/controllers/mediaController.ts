import { Request, Response } from 'express';
import * as mediaService from '../services/mediaService';

// GET - 200 OK
export const getAllMedia = (_req: Request, res: Response) => {
  try {
    const items = mediaService.fetchAllItems();
    res.status(200).json(items);
  } catch (error) {
    console.error("DETALLE DEL ERROR:", error);
    res.status(500).json({ error: 'Internal Server Error' }); // 500
  }
};

// POST - 201 Created
export const createMedia = (req: Request, res: Response) => {
  const { title, type } = req.body;

  // Validación: 400 Bad Request
  if (!title || !type) {
    return res.status(400).json({ error: 'Title and Type are required' });
  }

  const newItem = mediaService.saveItem(req.body);
  res.status(201).json(newItem);
};

// PUT - 200 OK o 404 Not Found
export const updateMedia = (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = mediaService.updateItem(Number(id), req.body);

  if (!updated) {
    return res.status(404).json({ error: 'Item not found' }); // 404
  }

  res.status(200).json(updated);
};

// DELETE - 200 OK o 404 Not Found
export const deleteMedia = (req: Request, res: Response) => {
  const { id } = req.params;
  const success = mediaService.removeItem(Number(id));

  if (!success) {
    return res.status(404).json({ error: 'Item not found to delete' });
  }

  res.status(200).json({ message: 'Deleted successfully' });
};

