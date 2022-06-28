const express = require('express');
const router = express.Router();
const db = require('../database.js')
let ProductService = require('../services/ProductsService.js');
let StylesService = require('../services/StylesService.js')

router.get('/', async (req, res) => {
  res.send(await ProductService.getAllProducts());
})

router.get('/:product_id', async (req, res) => {
  res.send(await ProductService.getOneProduct(req.params.product_id));
})

router.get('/:product_id/styles', async (req, res) => {
  let styles = await StylesService.getProductStyle(req.params.product_id);
  console.log(styles);
  res.sendStatus(200);
})

module.exports = router;