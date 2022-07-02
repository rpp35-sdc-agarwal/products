let { Products, Features } = require('../models.js');

module.exports = {
  getAllProducts: async () => {
    let offset = Math.floor(Math.random() * (1000001 - 1) + 1);
    return await Products.findAll({ offset, limit: 10 });
  },
  getOneProduct: async (product_id) => {
    return await Products.findOne({
      where: {id: product_id},
      include: { model: Features }
    });
  }
}