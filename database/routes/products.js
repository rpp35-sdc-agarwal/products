const express = require('express');
const router = express.Router();
const db = require('../database.js')
let ProductServices = require('../services/ProductsService.js');

router.get('/', async (req, res) => {
  res.send(await ProductServices.getAllProducts());
})

router.get('/:product_id', async (req, res) => {
  res.send(await ProductServices.getOneProduct(req.params.product_id));
})

module.exports = router;