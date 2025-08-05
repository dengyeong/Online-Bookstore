import express from 'express';
import { container } from 'tsyringe';
import { BookController } from '../controllers/BookController';
import { validateDto } from '../middleware/validate';
import { CreateBookDto } from '../dtos/CreateBookDto';

const router = express.Router();
const controller = container.resolve(BookController);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateDto(CreateBookDto), controller.create);

export default router;