const express = require('express');
const API = require('../config.example.js')
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

app.get('/relatedItems', (req, res) => {
  console.log(req.headers)
  axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products', {
    headers: {
      'Authorization': API
    }
  })
  .then(response => {

    res.json(response.data)

  })


})