const Travel = require('../models/travel');

const createTravel = async (req, res) => {
  const { destination, date, price } = req.body;

  try {
    const newTravel = new Travel({ destination, date, price });
    await newTravel.save();
    res.status(201).json(newTravel);
  } catch (error) {
    res.status(400).json({ message: 'Error creating travel package', error });
  }
};

module.exports = { createTravel };
