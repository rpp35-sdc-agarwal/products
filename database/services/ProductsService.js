let { Products, Related, Features } = require('../models.js');

module.exports = {
  getAllProducts: async () => {
    // let offset = Math.floor(Math.random() * (1000001 - 1) + 1);
    let offset = 1;
    return await Products.findAll({
      benchmark: true,
      logging: console.log,
      raw: true,
      nest: true,
      where: { id: [
        offset,
        offset + 1,
        offset + 2,
        offset + 3,
        offset + 4
      ]},
    });
  },
  getOneProduct: async (product_id) => {
    let product = await Products.findAll({
      benchmark: true,
      logging: console.log,
      raw: true,
      nest: true,
      where: { id: product_id },
      include: {
        model: Features
      }
    })
    .then(sameProducts => {
      let product = sameProducts[0];
      let features = [];
      sameProducts.forEach(product => {
        features.push(product.features);
      })
      product.features = features;
      return product;
    })
    product.features.forEach(feature => {
      if (feature.value === "null") {
        feature.value = null;
      }
    })
    console.log(product);
    return product;
  },
  getRelated: async (product_id) => {
    let results = await Related.findAll({
      benchmark: true,
      raw: true,
      nest: true,
      logging: console.log,
      attributes: [ 'related_product_id' ],
      where: { product_id }
    })
    return results.map(result => result['related_product_id']);
  }
}