const Sequelize = require('sequelize');
const db = require('./database.js');

let Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  slogan: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  category: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  default_price: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

let Features = db.define('features', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  feature: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  value: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

Products.hasMany(Features, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'product_id'
  }
});
Features.belongsTo(Products, { foreignKey: 'product_id' } );

let Styles = db.define('styles', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sale_price: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  original_price: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  default_style: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
});

Products.hasMany(Styles, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'product_id'
  }
});
Styles.belongsTo(Products, { foreignKey: 'product_id' } );

let Photos = db.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  thumbnail_url: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

Styles.hasMany(Photos, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'style_id'
  }
});
Photos.belongsTo(Styles, { foreignKey: 'style_id' } );

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
}, {
  timestamps: false
});

Styles.hasMany(Skus, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'style_id'
  }
});
Skus.belongsTo(Styles, { foreignKey: 'style_id' } );

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
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
});

Products.hasMany(Cart, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: 'product_id'
  }
});
Cart.belongsTo(Products, { foreignKey: 'product_id' } );

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