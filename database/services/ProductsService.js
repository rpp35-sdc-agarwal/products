let { Products, Related, Features } = require('../models.js');

module.exports = {
  getAllProducts: async () => {
    // let offset = Math.floor(Math.random() * (1000001 - 1) + 1);
    let offset = 1;
    return await Products.findAll({
      benchmark: true,
      logging: console.log,
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
    let product = await Products.findOne({
      benchmark: true,
      logging: console.log,
      where: { id: product_id },
      include: {
        model: Features
      }
    })
    product.features.forEach(feature => {
      if (feature.dataValues.value === "null") {
        feature.dataValues.value = null;
      }
    })
    return product;
  },
  getRelated: async (product_id) => {
    let results = await Related.findAll({
      benchmark: true,
      logging: console.log,
      attributes: [ 'related_product_id' ],
      where: { product_id }
    })
    return results.map(result => result.dataValues['related_product_id']);
  }
}