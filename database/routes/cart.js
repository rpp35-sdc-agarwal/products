const express = require('express');
const router = express.Router();
const db = require('../database.js')
let CartService = require('../services/CartService.js');

router.get('/', async (req, res) => {
  res.status(200).send(await CartService.getCart(req.session.id));
})

router.post('/:sku_id', async (req, res) => {
  console.log(req.session.id);
  res.status(201).send(await CartService.postCart(req.params.sku_id, req.session.id));
})

module.exports = router;