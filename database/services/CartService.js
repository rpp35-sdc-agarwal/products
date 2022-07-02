let { Cart } = require('../models.js');

module.exports = {
  getCart: async (user_session) => {
    return await Cart.findAll({
      where: { user_session }
    })
  },
  postCart: async (sku_id, user_session) => {
    await Cart.create({ sku_id, user_session });
  }
}