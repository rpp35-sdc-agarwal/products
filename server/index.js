const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const gitKey = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const PORT = process.env.PORT || 3000;



app.get('/reviews', (req, res) => {
  var config = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
    method: 'get',
    headers: { 'Authorization': gitKey },
    params: {
      product_id: parseInt(req.query.product_id),
      sort: req.query.filter
    }
  }
  axios(config)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      res.send(err);
    })

});

app.get('/reviews/meta', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta')
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});