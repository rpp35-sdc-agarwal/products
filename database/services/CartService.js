let { Cart } = require('../models.js');

module.exports = {
  getCart: async (user_session) => {
    try {
      return await Cart.findAll({
        where: { user_session }
      })
    } catch(err) {
      console.log('Error: ', err);
    }
  },
  postCart: async (sku_id, user_session) => {
    try {
      await Cart.create({ sku_id, user_session });
    } catch(err) {
      console.log('Error: ', err);
    }
  }
}