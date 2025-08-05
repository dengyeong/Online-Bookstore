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

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateBook:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - genre
 *         - isbn
 *         - description
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         genre:
 *           type: string
 *         isbn:
 *           type: string
 *         description:
 *           type: string
 *     
 *     Book:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateBook'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *
 *     ValidationError:
 *       type: object
 *       properties:
 *         errors:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 * 
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBook'
 *     responses:
 *       201:
 *         description: Book created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request (validation error)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 */