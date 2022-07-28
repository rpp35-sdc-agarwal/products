let { Styles, Photos, Skus } = require('../models.js');

// module.exports = {
//   getProductStyle: async (product_id) => {
//     return await Styles.findAll({
//       benchmark: true,
//       logging: console.log,
//       where: { product_id },
//       raw: true,
//       nest: true,
//       include: [ Photos, Skus ]
//     })
//     .then(styles => {
//       let transformedStyles = [];
//       styles.forEach(style => {
//         // if there exists the style_id in transformedStyles
//         if (transformedStyles.some(tStyle => tStyle.style_id === style.style_id)) {
//           // find the index of that style in the transformedStyles
//           let index = transformedStyles.findIndex(object => { return object.style_id === style.style_id });
//           // append the sku into the transformedStyles
//           transformedStyles[index].skus.push(style.skus);
//         } else {
//           // if not found, set up the photos and skus as arrays and push the style into the transformedStyles
//           style.skus = [style.skus];
//           style.photos = [style.photos];
//           transformedStyles.push(style);
//         }
//       })
//       return transformedStyles
//     })
//     .then(styles => {
//       styles.forEach(style => {
//         if (style.sale_price === 'null') {
//           style.sale_price = null;
//         }
//         let skus = {};
//         style.skus.forEach(sku => {
//           skus[sku.id] = {
//             quantity: sku.quantity,
//             size: sku.size
//           }
//         })
//         style.skus = skus;
//       })
//       return styles;
//     })
//   }
// }

module.exports = {
  getProductStyle: async (product_id) => {
    return await Styles.findAll({
      benchmark: true,
      logging: console.log,
      where: { product_id },
      raw: true,
      nest: true,
      include: [ Photos, Skus ]
    })
    .then(styles => {
      let transformedStyles = [];
      styles.forEach(style => {
        // if there exists the style_id in transformedStyles
        if (transformedStyles.some(tStyle => tStyle.style_id === style.style_id)) {
          // find the index of that style in the transformedStyles
          let index = transformedStyles.findIndex(object => { return object.style_id === style.style_id });
          // append the sku into the transformedStyles
          transformedStyles[index].skus.push(style.skus);
        } else {
          // if not found, set up the photos and skus as arrays and push the style into the transformedStyles
          style.skus = [style.skus];
          style.photos = [style.photos];
          transformedStyles.push(style);
        }
      })
      return transformedStyles
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