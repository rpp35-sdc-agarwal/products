const express = require('express');
const router = express.Router();
const db = require('../database.js')
let CartService = require('../services/CartService.js');

router.get('/:user_session', async (req, res) => {
  console.log(req.session);
  res.send(await CartService.getCart(req.params.user_session));
})

router.post('/:sku_id', async (req, res) => {
  console.log(req.sessionID);
  res.send(await CartService.postCart(req.params.sku_id));
})

module.exports = router;