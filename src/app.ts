import express from 'express';
import 'reflect-metadata';
import './container/tsyringe.config';
import bookRoutes from './routes/bookRoutes';
import { setupSwagger } from './docs/swagger';
import config from './config/serverConfig';

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);
if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app);
}

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));