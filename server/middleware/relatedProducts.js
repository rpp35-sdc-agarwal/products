const axios = require('axios');
const API = require('../../config.js')


const getRelatedProducts = (req, res, next) => {
  var id = req.params.product_id
  console.log('what is id', id)

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
  .then(data => {
    res.products = data
    next();

  })

  .catch(err => console.log('there was an error'))

}

const getRelatedStyles = (req, res, next) => {
  var id = req.params.product_id
  console.log('what is id', id)

  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`, {
    headers: {
      'Authorization': API
    }
  })
  .then(response => {

    var promises = [];
    for (var i = 0; i < response.data.length; i++) {
      var id = response.data[i]
      promises.push(axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, {
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
  .then(data => {
    res.styles = data

    next();

  })

  .catch(err => console.log('there was an error'))

}

const addPriceToProducts = (req, res, next) => {
  var products = res.products;

  for (var i = 0; i < res.styles.length; i++) {
    console.log(res.styles[i]['product_id'])
    var styles = res.styles[i].results;
    console.log(styles.length)

    for (var j = 0; j < styles.length; j++) {
      console.log(styles[j]['default?'])

      if (styles[j]['default?']) {
        console.log('what is price', styles[j].original_price)
        console.log('what is price', styles[j].sale_price)
        products[i].photo = styles[j].photos[0].thumbnail_url
        if (styles[j].sale_price) {
          products[i].sale_price = styles[j].sale_price;
        }


      }
    }
  }
  res.products = products
  next()
}

module.exports = {
  getRelatedProducts: getRelatedProducts,
  getRelatedStyles: getRelatedStyles,
  addPriceToProducts: addPriceToProducts
}
