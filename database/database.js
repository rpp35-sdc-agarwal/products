const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.DATABASE, null, null, {
  host: process.env.PGHOST,
  dialect: 'postgres'
});