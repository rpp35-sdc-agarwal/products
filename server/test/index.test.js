let request = require('supertest');
let app = require('../index.js');
let { Cart } = require('../../database/models.js');

// to be replaced with database
const exampleData = require('./exampleData.js');

let product_id = 71699;
let sku_id = 413404;

describe('Database Unit & Integration Testing', () => {
  describe('Product Services', () => {
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
      expect(response.body).toStrictEqual(exampleData.product);
    });
    test('should send a limit of 10 products', async () => {
      const response = await request(app).get(`/products`);
      expect(response.body.length).toEqual(10);
    });
  });

  describe('Style Services', () => {
    test('should send back 200 as the status code', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.statusCode).toBe(200);
    });
    test('should send back json as the content-type', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
    test('should send back correct product styles', async () => {
      const response = await request(app).get(`/products/${product_id}/styles`);
      expect(response.body).toStrictEqual(exampleData.style);
    });
  });

  describe('Cart Services', () => {
    test('should send back 200 as the status code on get', async () => {
      const response = await request(app).get(`/cart`);
      expect(response.statusCode).toBe(200);
    });
    test('should send back json as the content-type', async () => {
      const response = await request(app).get(`/cart`);
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
    test('should send back 201 as status code on post', async () => {
      const post = await request(app).post(`/cart/${sku_id}`);
      expect(post.statusCode).toBe(201);
    });
    test('should add to the cart database', async () => {
      let previousCart = await Cart.findAll();
      let previousLastSession = previousCart[previousCart.length - 1].dataValues.user_session;
      const post = await request(app).post(`/cart/${sku_id}`);
      let currentCart = await Cart.findAll();
      let currentLastSession = currentCart[currentCart.length - 1].dataValues.user_session;
      expect(previousLastSession).not.toBe(currentLastSession);
    });
  });
})