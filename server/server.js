// const newrelic = require('newrelic');
const app = require('./index.js');
require('dotenv').config();

const port = process.env.PGPORT;

app.listen(port, () => {
  console.log(`Agarwal 🥳 listening on port ${port}`)
})