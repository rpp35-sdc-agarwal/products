const axios = require('axios');
const API = require('../../config.js')

const addOneOutfit = (req, res, next) => {
  var id = req.body.product_id;
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
  var id = req.body.product_id
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

    }
    console.log('what is outfit at the end', res.outfit)
    next()

  })

}

const outfitSession = (req, res, next) => {
  var session = req.session.outfits
  if (!session) {
    console.log('am i in here? with no session')
    req.session.outfits = []
  }


  var outfitToAddId = res.outfit.id;
  var found = false;
  for (var i = 0; i < req.session.outfits.length; i++) {
    var outfitId = req.session.outfits[i].id;
    if (outfitId === outfitToAddId) {
      console.log('am i in here ad they are same')
      found = true
      break
    }
  }
  if (!found) {

    req.session.outfits.push(res.outfit)
  }
  next()
}

const deleteOutfit = (req, res, next) => {
  var id = req.body.product_id;
  console.log('what is id', id)
  console.log('what are outfits', req.session.outfits)
  for (var i = 0; i < req.session.outfits.length; i++) {
    var outfitId = JSON.stringify(req.session.outfits[i].id);
    if (id === outfitId) {
      console.log('i am in here, deleting')
      req.session.outfits.splice(i, 1)

      break;
    }
  }
  next()
}

module.exports = {
  addOneOutfit: addOneOutfit,
  addStyleToOutfit: addStyleToOutfit,
  outfitSession: outfitSession,
  deleteOutfit: deleteOutfit
}