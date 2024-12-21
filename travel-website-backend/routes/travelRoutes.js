const express = require('express');
const { createTravel } = require('../controllers/travelController');

const router = express.Router();

router.post('/', createTravel);

module.exports = router;
