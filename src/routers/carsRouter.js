const express = require('express');
const Cars = require('../helpers/carsModel');

const { validateCar, validateCarId } = require('../middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allCars = await Cars.get();
    res.status(200).json(allCars);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validateCarId, async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.post('/', validateCar, async (req, res, next) => {
  try {
    const { vin, make, model, mileage, transmission, status } = req.body;
    const newCar = await Cars.insert({
      vin,
      make,
      model,
      mileage,
      transmission,
      status
    });
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', [validateCarId, validateCar], async (req, res, next) => {
  try {
    const { vin, make, model, mileage, transmission, status } = req.body;
    const { id } = req.params;
    const updatedCar = await Cars.update(id, {
      vin,
      make,
      model,
      mileage,
      transmission,
      status
    });
    res
      .status(200)
      .json({ message: `${updatedCar} car got updated successfully` });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validateCarId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCar = await Cars.remove(id);
    res
      .status(200)
      .json({ message: `${deletedCar} car was removed successfully` });
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
