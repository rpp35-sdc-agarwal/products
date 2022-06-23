const express = require('express');
const db = require('../database/database');
const app = express();

// example data to be replaced with an actual database
let exampleData = require('./test/exampleData');


// Testing database connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(err => console.error('Unable to connect to the database:', err));

// Products Route
app.use('/products', require('../database/routes/products.js'));

app.get('/products/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.product);
});

app.get('/products/:product_id/styles', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.styles);
});

module.exports = app