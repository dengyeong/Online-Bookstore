import { Request, Response } from 'express';
import { BookService } from '../services/BookService';
import { injectable } from 'tsyringe';
import { CreateBookDto } from '../dtos/CreateBookDto';

@injectable()
export class BookController {
  constructor(private bookService: BookService) {}

  getAll = (req: Request, res: Response) => {
    res.json(this.bookService.getAll());
  };

  getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = this.bookService.getById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  };

  create = (req: Request, res: Response) => {
    const bookDto: CreateBookDto = req.body;
    const newBook = this.bookService.create(bookDto);
    res.status(201).json(newBook);
  };
}