const express = require('express');
const router = express.Router();
const db = require('../database.js');
const { createClient } = require('redis');
let ProductsService = require('../services/ProductsService.js');
let StylesService = require('../services/StylesService.js');
require('dotenv').config();

const client = createClient({
  url: process.env.REDISURL
});

let start = async function () {
  await client.connect();
}

start();

// /product/
router.get('/', async (req, res) => {
  let products = await getSetCache('products', async () => {
    return await ProductsService.getAllProducts();
  });
  res.status(200).json(products);
})

router.get('/:product_id', async (req, res) => {
  let product = await getSetCache(`product${req.params.product_id}`, async () => {
    return await ProductsService.getOneProduct(req.params.product_id);
  })
  res.status(200).json(product);
})

router.get('/:product_id/related', async (req, res) => {
  let related = await getSetCache(`related${req.params.product_id}`, async () => {
    return await ProductsService.getOneProduct(req.params.product_id);
  })
  res.status(200).json(related);
})

router.get('/:product_id/styles', async (req, res) => {
  let styles = await getSetCache(`styles${req.params.product_id}`, async () => {
    let data = { product_id: req.params.product_id };
    data.results = await StylesService.getProductStyle(req.params.product_id);
    return data;
  })
  res.status(200).json(styles);
})

let getSetCache = async function (key, callback) {
  return await client.get(key)
    .then(async results => {
      if (results !== null) {
        return JSON.parse(results);
      } else {
        results = await callback();
        client.set(key, JSON.stringify(results));
        return results;
      }
    })
}

module.exports = router;
