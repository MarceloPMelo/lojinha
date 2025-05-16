const express = require('express');
const index = express.Router();
const { testarAPI } = require('../controllers/indexControler');

index.get('/teste', testarAPI);

module.exports = index;
