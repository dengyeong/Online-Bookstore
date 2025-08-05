import express from 'express';
import 'reflect-metadata';
import './container/tsyringe.config';
import bookRoutes from './routes/bookRoutes';
import { errorHandler } from './middleware/errorHandler';
import config from './config/serverConfig';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/api/books', bookRoutes);

const PORT = config.port || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));