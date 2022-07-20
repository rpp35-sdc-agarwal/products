let { Styles, Photos, Skus } = require('../models.js');

module.exports = {
  getProductStyle: async (product_id) => {
    return await Styles.findAll({
      benchmark: true,
      logging: console.log,
      where: { product_id },
      raw: true,
      nest: true
      // include: [
      //   {
      //     model: Photos,
      //     required: false
      //   }, {
      //     model: Skus
      //   }
      // ]
    })
    .then(async styles => {
      // console.log(styles);
      for (let i = 0; i < styles.length; i++) {
        styles[i].photos = await Photos.findAll({
          where: { style_id: styles[i].style_id },
          raw: true,
          nest: true
        });
        if (styles[i].photos.length === 0) {
          styles[i].photos.push({
            url: null,
            thumbnail_url: null
          })
        }
        styles[i].skus = await Skus.findAll({
          where: { style_id: styles[i].style_id },
          raw: true,
          nest: true
        });
      }
      return styles;
    })
    .then(styles => {
      styles.forEach(style => {
        if (style.sale_price === 'null') {
          style.sale_price = null;
        }
        let skus = {};
        style.skus.forEach(sku => {
          skus[sku.id] = {
            quantity: sku.quantity,
            size: sku.size
          }
        })
        style.skus = skus;
      })
      return styles;
    })
  }
}