import request from 'supertest';
import express from 'express';
import 'reflect-metadata';
import '../src/container/tsyringe.config';
import bookRoutes from '../src/routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/api/books', bookRoutes);

describe('Bookstore API', () => {
  it('GET /api/books - should return all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/books/:id - should return a book by id', async () => {
    const res = await request(app).get('/api/books/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('title');
  });

  it('GET /api/books/:id - should return 404 for non-existent book', async () => {
    const res = await request(app).get('/api/books/999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  it('POST /api/books - should create a new book', async () => {
    const newBook = {
      title: 'Test Driven Development',
      author: 'Kent Beck',
      genre: 'Programming',
      isbn: '1234567899',
      description: 'Red, Green, Refactor.'
    };
    const res = await request(app).post('/api/books').send(newBook);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Driven Development');
  });

  it('POST /api/books - should return 400 for invalid input', async () => {
    const res = await request(app).post('/api/books').send({ title: 'Invalid Book' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('errors');
  });
});
