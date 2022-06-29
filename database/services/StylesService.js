let { Styles, Photos, Skus } = require('../models.js');

module.exports = {
  getProductStyle: async (product_id) => {
    try {
      return await Styles.findAll({
        where: { product_id },
        include: [{ model: Photos }, { model: Skus }]
      })
      .then(styles => {
        styles.forEach(style => {
          console.log(style.dataValues);
          let skus = {};
          style.dataValues.skus.forEach(sku => {
            skus[sku.dataValues.id] = {
              quantity: sku.dataValues.quantity,
              size: sku.dataValues.size
            }
          })
          style.dataValues.skus = skus;
        })
        return styles;
      })
    } catch (err) {
      console.log('Error: ', err) };
  }
}