const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../database/database');

// example data to be replaced with an actual database
// let exampleData = require('./test/exampleData');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing database connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(err => console.error('Unable to connect to the database:', err));

// Routes
app.use('/products', require('../database/routes/products.js'));

// for Loader.io testing
app.get('/loaderio-ab7ffaaaad249436638d06119005756e', (req, res) => {
  res.send('loaderio-ab7ffaaaad249436638d06119005756e');
});

module.exports = app
