const express = require('express');
const Cars = require('../helpers/carsModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allCars = await Cars.get();
    res.status(200).json(allCars);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { vin, make, model, mileage } = req.body;
    const newCar = await Cars.insert({
      vin,
      make,
      model,
      mileage
    });
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res) => {
  res
    .status(500)
    .json({ message: 'Your request could not be processed! ' + err.message });
});

module.exports = router;
