const express = require('express');
const router = express.Router();
const db = require('../database.js')
let { Photos } = require('../models.js');

router.get('/', (req, res) => {
  Photos.findAll()
    .then(products => {
      console.log(products);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Error: ', err);
    });
})

module.exports = router;