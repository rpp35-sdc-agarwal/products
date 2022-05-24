const express = require('express');
const API = require('../config.js')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const getRelated = require('./middleware/relatedProducts.js')

/////////////////////////////////////////////////////////
//    Products Routes
/////////////////////////////////////////////////////////

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

app.get('/products/:product_id', (req, res) => {
  console.log('what is id', req.params.product_id)
  var id = req.params.product_id
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, {
    headers: {
      'Authorization': API
    }
  })
  .then(response => {

    res.json(response.data)

  })
  .catch(err => console.log('there was an error'))
})

/////////////////////////////////////////////////////////
//    Product Overview Routes
/////////////////////////////////////////////////////////

// TODO: Add routes for Product Overview









/////////////////////////////////////////////////////////
//    Related Items Routes
/////////////////////////////////////////////////////////
app.get('/products/:product_id/related', [getRelated.getRelatedProducts, getRelated.getRelatedStyles, getRelated.addPriceToProducts], (req, res) => {
  res.json(res.products)

})



/////////////////////////////////////////////////////////
//    Questions and Answers Routes
/////////////////////////////////////////////////////////

// TODO: Add routes for Questions and Answers

// app.get('/products/:product_id/questions', (req, res) => {
//   var id = req.params.product_id
//   axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/?product_id=${id}`, {
//     headers: {
//       'Authorization': API
//     }
//   })
//   .then((data) => {
//     console.log(data);
//     res.send(data);
//   })
// })









/////////////////////////////////////////////////////////
//    Reviews Routes
/////////////////////////////////////////////////////////





const PORT = process.env.PORT || 3000;



app.get('/reviews', (req, res) => {
  var config = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
    method: 'get',
    headers: { 'Authorization': API },
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
      console.log(err);
      res.status(400).send(`There has been an error: ${err}`);
    })

});

app.get('/reviews/meta', (req, res) => {
  var config = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta',
    method: 'get',
    headers: { 'Authorization': API },
    params: {
      product_id: parseInt(req.query.product_id)
    }
  }
  axios(config)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`There has been an error`);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});



