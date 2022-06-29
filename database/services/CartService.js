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
  }
  // postCart: async () => {
  // }
}