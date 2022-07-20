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

router.get('/:product_id/related', async (req, res) => {
  res.status(200).send(await ProductsService.getRelated(req.params.product_id));
})

router.get('/:product_id/styles', async (req, res) => {
  let data = { product_id: req.params.product_id };
  data.results = await StylesService.getProductStyle(req.params.product_id);
  // data.results.forEach(style => {
  //   if (style.dataValues.photos.length === 0) {
  //     style.dataValues.photos = [{
  //       url: null,
  //       thumbnail_url: null
  //     }];
  //   }
  // })
  res.status(200).send(data);
})

module.exports = router;