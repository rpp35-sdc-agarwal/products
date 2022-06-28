let { Products } = require('../models.js');

module.exports = {
  getAllProducts: async () => {
    try {
      products = await Products.findAll()
    } catch(err) {
      console.log('Error: ', err);
    }
  },
  getOneProduct: async (product_id) => {
    try {
      const product = await Products.findOne({
        where: {id: product_id}
      });
      product.dataValues.features = [];
      const features = await product.getFeatures();
      features.forEach(feature => {
        product.dataValues.features.push(feature.dataValues)
      })
      return product;
    } catch (err) {
      console.log('Error: ', err) };
  }
}