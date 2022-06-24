const express = require('express');
const db = require('../database/database');
const app = express();

// example data to be replaced with an actual database
let exampleData = require('./test/exampleData');


// Testing database connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(err => console.error('Unable to connect to the database:', err));

// Routes
app.use('/products', require('../database/routes/products.js'));
app.use('/features', require('../database/routes/features.js'));
app.use('/styles', require('../database/routes/styles.js'));
app.use('/photos', require('../database/routes/photos.js'));
app.use('/skus', require('../database/routes/skus.js'));
app.use('/cart', require('../database/routes/cart.js'));


app.get('/products/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.product);
});

app.get('/products/:product_id/styles', (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(exampleData.styles);
});

module.exports = app