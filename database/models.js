const Sequelize = require('sequelize');
const db = require('./database.js');

let Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slogan: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  default_price: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

let Features = db.define('features', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  feature: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Products.hasMany(Features, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Features.belongsTo(Products);

let Styles = db.define('styles', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sale_price: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  original_price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  default_style: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

Products.hasMany(Styles, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Styles.belongsTo(Products);

let Photos = db.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  thumbnail_url: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

Styles.hasMany(Photos, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Photos.belongsTo(Styles);

let Skus = db.define('skus', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  size: {
    type: Sequelize.STRING(10),
    allowNull: false
  }
});

Styles.hasMany(Skus, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Skus.belongsTo(Styles);

let Cart = db.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  user_session: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Products.hasMany(Cart, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Cart.belongsTo(Products);

Products.sync();
Features.sync();
Styles.sync();
Photos.sync();
Skus.sync();
Cart.sync();

module.exports = {
  Products,
  Features,
  Styles,
  Photos,
  Skus,
  Cart
}