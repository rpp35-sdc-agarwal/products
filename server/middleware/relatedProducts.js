const axios = require('axios');
const API = require('../../config.example.js')


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
    console.log('what is data in styles', data)
    next();

  })

  .catch(err => console.log('there was an error'))

}

module.exports = {
  getRelatedProducts: getRelatedProducts,
  getRelatedStyles: getRelatedStyles
}
