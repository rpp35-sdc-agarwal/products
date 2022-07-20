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
          required: false
        }, {
          model: Skus
        }
      ]
    })
    .then(styles => {
      styles.forEach(style => {
        if (style.dataValues.sale_price === 'null') {
          style.dataValues.sale_price = null;
        }
        let skus = {};
        style.dataValues.skus.forEach(sku => {
          skus[sku.dataValues.id] = {
            quantity: sku.dataValues.quantity,
            size: sku.dataValues.size
          }
        })
        style.dataValues.skus = skus;
        if (style.photos.length === 0) {
          style.photos = [{
            "url": null,
            "thumbnail_url": null
          }]
        }
      })
      return styles;
    });
  }
}