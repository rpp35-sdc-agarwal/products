const express = require('express');
const app = express();
const { v4: genuuid } = require('uuid');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;
const db = require('../database/database');

// example data to be replaced with an actual database
let exampleData = require('./test/exampleData');

// session middleware
app.use(sessions({
  secret: 'sdc-secret',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
  genid: function (req) {
    console.log('session id created!');
    return genuuid();
  }
}))

// parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());


// Testing database connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(err => console.error('Unable to connect to the database:', err));

// Routes
app.use('/products', require('../database/routes/products.js'));
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