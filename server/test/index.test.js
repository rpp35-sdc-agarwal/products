import request from 'supertest';
import app from '../index.js';
import exampleData from './exampleData.js';

let product_id = 71699;

describe('Initialize testing suite', () => {
  describe('Product Information', () => {
    test('should send back 200 as the status code', async () => {
      const response = await request(app).get(`/products/${product_id}`);
      expect(response.statusCode).toBe(200);
    });
    test('should send back json as the content-type', async () => {
      const response = await request(app).get(`/products/${product_id}`);
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
    test('should send back correct product information', async () => {
      const response = await request(app).get(`/products/${product_id}`);
      expect(response.data).toBe(exampleData.products);
    });
  });

  describe('Product Style Information', () => {
    test('should send back 200 as the status code', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.statusCode).toBe(200);
    });
    test('should send back json as the content-type', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
    test('should send back correct product information', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.data).toBe(exampleData.products);
    });
  });
})