const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Here is a successful response');
});

app.listen(port, () => {
  console.log(`Agarwal 🥳 listening on port ${port}`)
})