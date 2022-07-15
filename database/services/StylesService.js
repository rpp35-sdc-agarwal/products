let { Styles, Photos, Skus } = require('../models.js');

module.exports = {
  getProductStyle: async (product_id) => {
    return await Styles.findAll({
      benchmark: true,
      logging: console.log,
      where: { product_id },
      include: [
        {
          model: Photos,
          separate: true
        },
        {
          model: Skus,
          separate: true
        }
      ]
    })
    .then(styles => {
      styles.forEach(style => {
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
    });
  }
}