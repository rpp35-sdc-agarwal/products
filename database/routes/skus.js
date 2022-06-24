const express = require('express');
const router = express.Router();
const db = require('../database.js')
let { Skus } = require('../models.js');

router.get('/', (req, res) => {
  Skus.findAll()
    .then(products => {
      console.log(products);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Error: ', err);
    });
})

module.exports = router;