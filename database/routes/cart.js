const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const router = express.Router();
const db = require('../database.js')
let CartService = require('../services/CartService.js');
const oneDay = 1000 * 60 * 60 * 24;

// session middleware
router.use(sessions({
  secret: 'super-secret',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}))

// parse incoming data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// cookie parser middleware
router.use(cookieParser());

router.get('/:user_session', async (req, res) => {
  console.log(req.session);
  res.send(await CartService.getCart(req.params.user_session));
})

router.post('/:sku_id', async (req, res) => {
  console.log(req.sessionID);
  res.send(await CartService.postCart(req.params.sku_id));
})

module.exports = router;