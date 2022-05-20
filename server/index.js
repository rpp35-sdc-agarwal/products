const express = require('express');
const API = require('../config.js')
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const getRelated = require('./middleware/relatedProducts.js')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
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

// TODO: Add routes for Reviews






