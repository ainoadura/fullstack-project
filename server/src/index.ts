import express, { Request, Response } from 'express';
import cors from 'cors';
import { ENV } from './config/env'; 
import mediaRoutes from './routes/mediaRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/media', mediaRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send('API Frame & Page funcionando! 🚀');
});

// Usamos ENV.port en lugar del número a mano
app.listen(ENV.port, () => {
  console.log(`🚀 Servidor en: http://localhost:${ENV.port}`);
});
