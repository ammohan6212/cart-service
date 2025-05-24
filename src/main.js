const express = require('express');
const app = express();
const port = 8080;

app.get('/cart', (req, res) => {
  res.status(200).send('Welcome to the cart service');
});

app.listen(port, () => {
  console.log(`Cart service running on port ${port}`);
});
