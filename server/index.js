require('dotenv').config()

const express = require('express');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.send({ hi: 'there!!' });
});

// listen for requests
app.listen(process.env.PORT);