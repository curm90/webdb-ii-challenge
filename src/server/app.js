const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../routers/carsRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/cars', carsRouter);

module.exports = app;
