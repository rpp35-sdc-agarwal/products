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

app.get('/products', (req, res) => {

  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`, {
    headers: {
      'Authorization': API
    }
  })
  .then(response => {

    res.json(response.data)

  })
  .catch(err => console.log('there was an error'))
})

app.get('/products/:product_id/related', (req, res) => {
  var id = req.params.product_id
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`, {
    headers: {
      'Authorization': API
    }
  })
  .then(response => {
    var promises = [];
    for (var i = 0; i < response.data.length; i++) {
      var id = response.data[i]
      promises.push(axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, {
        headers: {
          'Authorization': API
        }
      }))
    }
    return promises

  })
  .then(promises => {
    return Promise.all(promises)
  })
  .then(results => {
    var data = [];
    for (var i = 0; i < results.length; i++) {
      data.push(results[i].data);
    }
    return data;
  })
  .then(data => res.json(data))

  .catch(err => console.log('there was an error'))


})