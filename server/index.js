const express = require('express');
const app = express();
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const oneDay = 1000 * 60 * 60 * 24;
const db = require('../database/database');

// example data to be replaced with an actual database
let exampleData = require('./test/exampleData');

app.use(cors());

// session middleware
app.use(sessions({
  secret: 'sdc-secret',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
  genid: function (req) {
    let session = Math.floor(1000 + Math.random() * 9000);
    return session;
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

module.exports = app