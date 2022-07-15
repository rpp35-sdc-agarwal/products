let { Products, Related, Features } = require('../models.js');

module.exports = {
  getAllProducts: async (limit = 10) => {
    // let offset = Math.floor(Math.random() * (1000001 - 1) + 1);
    let offset = 1;
    return await Products.findAll({
      benchmark: true,
      logging: console.log,
      offset,
      limit: 10 });
  },
  getOneProduct: async (product_id) => {
    return await Products.findOne({
      benchmark: true,
      logging: console.log,
      where: { id: product_id },
      include: {
        model: Features,
        separate: true
      }
    });
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