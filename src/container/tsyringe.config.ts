import 'reflect-metadata';
import { container } from 'tsyringe';
import { BookService } from '../services/BookService';

container.registerSingleton(BookService, BookService);