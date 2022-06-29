const express = require('express');
const router = express.Router();
const db = require('../database.js')
let ProductsService = require('../services/ProductsService.js');
let StylesService = require('../services/StylesService.js')

// /product/
router.get('/', async (req, res) => {
  res.status(200).send(await ProductsService.getAllProducts());
})

router.get('/:product_id', async (req, res) => {
  res.status(200).send(await ProductsService.getOneProduct(req.params.product_id));
})

router.get('/:product_id/styles', async (req, res) => {
  let styles = await StylesService.getProductStyle(req.params.product_id);
  res.status(200).send(styles);
})

module.exports = router;