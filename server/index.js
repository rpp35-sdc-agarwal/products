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

/////////////////////////////////////////////////////////
//    Product Overview Routes
/////////////////////////////////////////////////////////

// TODO: Add routes for Product Overview









/////////////////////////////////////////////////////////
//    Related Items Routes
/////////////////////////////////////////////////////////
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
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta')
});

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

app.get('/products/:product_id/related', [getRelated.getRelatedProducts, getRelated.getRelatedStyles, getRelated.addPriceToProducts], (req, res) => {
  res.json(res.products)

})