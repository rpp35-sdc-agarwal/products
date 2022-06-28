let { Styles, Photos, Skus } = require('../models.js');

module.exports = {
  getProductStyle: async (product_id) => {
    try {
      return await Styles.findAll({
        where: { product_id },
        include: [{ model: Photos }, { model: Skus }]
      });
    } catch (err) {
      console.log('Error: ', err) };
  }
}