const axios = require('axios');
const API = require('../../config.js')

const addOneOutfit = (req, res, next) => {
  var id = req.params.product_id;
  console.log('did i make it here', id)
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`, {
  headers: {
    'Authorization': API
    }
  })
  .then(result => {

    res.outfit = result.data

    next()
  })
  .catch(err => console.log('there was an error'))
}

const addStyleToOutfit = (req, res, next) => {
  var id = req.params.product_id
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`, {
    headers: {
      'Authorization': API
    }
  })
  .then(result => {

    var styles = result.data.results;

    var photoFound = false;
    for (var j = 0; j < styles.length; j++) {

      if (styles[j]['default?']) {
        var photo = styles[j].photos[0].thumbnail_url;
        if (photo) {
          res.outfit.photo = styles[j].photos[0].thumbnail_url
          photoFound = true;
        }
        if (styles[j].sale_price) {
          res.outfit.sale_price = styles[j].sale_price;
        }
      }
    }

    if (!photoFound) {
      res.outfit.photo = styles[0].photos[0].thumbnail_url
      console.log('i made it to the photos conditional')
    }
    console.log('what is outfit at the end', res.outfit)
    next()

  })

}

module.exports = {
  addOneOutfit: addOneOutfit,
  addStyleToOutfit: addStyleToOutfit
}