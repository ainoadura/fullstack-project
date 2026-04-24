import { Router } from 'express';
import { getAllMedia, createMedia, updateMedia, deleteMedia } from '../controllers/mediaController';

const router = Router();

router.get('/', getAllMedia);      
router.post('/', createMedia);   
router.put('/:id', updateMedia); 
router.delete('/:id', deleteMedia); 

export default router;
