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
app.get('/loaderio-80cc5ac8e73127a799fb931e825b81e9', (req, res) => {
  res.send('loaderio-80cc5ac8e73127a799fb931e825b81e9');
});

module.exports = app