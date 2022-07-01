let { Products, Features } = require('../models.js');

module.exports = {
  getAllProducts: async () => {
    try {
      return await Products.findAll({ limit: 5 })
    } catch(err) {
      console.log('Error: ', err);
    }
  },
  getOneProduct: async (product_id) => {
    try {
      return await Products.findOne({
        where: {id: product_id},
        include: { model: Features }
      })
    } catch (err) {
      console.log('Error: ', err) };
  }
}