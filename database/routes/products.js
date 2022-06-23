const express = require('express');

const router = express.Router();
const db = require('../database.js')
let { Products }= require('../models.js');

router.get('/', (req, res) => {
  Products.findAll()
    .then(products => {
      console.log(products);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Error: ', err);
    });
})

module.exports = router;