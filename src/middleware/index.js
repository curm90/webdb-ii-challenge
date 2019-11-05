const Cars = require('../helpers/carsModel');

function validateCarId(req, res, next) {
  Cars.get()
    .then(cars => {
      const { id } = req.params;
      if (cars.find(car => car.id !== id)) {
        res
          .status(404)
          .json({ message: `Car with the id of ${id} does not exist.` });
      } else {
        req.cars = cars;
        next();
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Your request could not be processed: ' + err.message
      });
    });
}

function validateCar(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Missing car data' });
  } else if (
    !req.body.vin ||
    !req.body.make ||
    !req.body.model ||
    !req.body.mileage
  ) {
    res
      .status(400)
      .json({ message: 'Please provide vin, make, model and mileage' });
  } else {
    next();
  }
}

module.exports = {
  validateCar,
  validateCarId
};
