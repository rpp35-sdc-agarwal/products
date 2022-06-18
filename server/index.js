import express from 'express';
const app = express();

// example data to be replaced with an actual database
import exampleData from './test/exampleData.js';

app.get('/products/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.product);
});

app.get('/products/:product_id/styles', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.styles);
});

export default app