import { injectable } from 'tsyringe';
import { books } from '../data/booksData';
import { Book } from '../models/Book';

@injectable()
export class BookService {
  getAll(): Book[] {
    return books;
  }

  getById(id: number): Book | undefined {
    return books.find(book => book.id === id);
  }

  create(book: Omit<Book, 'id'>): Book {
    const newBook: Book = {
      id: books.length + 1,
      ...book      
    };
    books.push(newBook);
    return newBook;
  }
}