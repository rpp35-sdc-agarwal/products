const Sequelize = require('sequelize');
require('dotenv').config();

let db_name = process.env.PGDATABASE;
let username = process.env.PGUSERNAME;
let password = process.env.PGPASSWORD;
let host = process.env.PGHOST;

module.exports = new Sequelize(db_name, username, password, {
  host: host,
  dialect: 'postgres'
});