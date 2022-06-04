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

    var photoFound = false;
    for (var j = 0; j < styles.length; j++) {


      console.log(styles[j]['default?'])

      if (styles[j]['default?']) {
        console.log('what is price', styles[j].original_price)
        console.log('what is price', styles[j].sale_price)
        var photo = styles[j].photos[0].thumbnail_url;
        if (photo) {
          products[i].photo = styles[j].photos[0].thumbnail_url
          photoFound = true;
        }
        if (styles[j].sale_price) {
          products[i].sale_price = styles[j].sale_price;
        }
      }
    }

    if (!photoFound) {
      products[i].photo = styles[0].photos[0].thumbnail_url
      console.log('i made it to the photos conditional')
    }
  }
  res.products = products
  next()
}

const getReviews = (req, res, next) => {
  var id = req.params.product_id
  console.log('what is id', id)

  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`, {
    headers: {
      'Authorization': API
    }
  })
  .then ((results) => {


    var promises = []

    for (var i = 0; i < results.data.length; i++) {

      var id = results.data[i]

      var config = {
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta',
        method: 'get',
        headers: { 'Authorization': API },
        params: {
          product_id: parseInt(id)
        }
      }
      promises.push(axios(config))
    }
    return promises;
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
    for (var i = 0; i < res.products.length; i++) {
      var ratings = data[i].ratings;
      if (Object.keys(ratings).length > 0) {
        res.products[i].ratings = avgScore(ratings)
      }
    }


    next()
  })
  .catch((err) => {console.log('there was an error')})
}

var avgScore = (allScores) => {
  //store the ratings in a results array
  var ratings = [];
  var total = 0;
  //determine the number of ratings, total and the amount corresponding to each value
  //iterate through the object
  for (var rating in allScores) {
    //multiply the key by its value
    var ratingProduct = rating * allScores[rating];
    //add the amount of ratings to total
    total = total + parseInt(allScores[rating]);
    //push the result into the ratings array
    ratings.push(ratingProduct);
  }
  //add those values together
  ratings = ratings.reduce((previousVal, currentVal) => { return previousVal + currentVal });
  ratings = (ratings / total).toFixed(2)
  return ratings;
}


module.exports = {
  getRelatedProducts: getRelatedProducts,
  getRelatedStyles: getRelatedStyles,
  addPriceToProducts: addPriceToProducts,
  getReviews: getReviews
}
