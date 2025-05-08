const express = require('express');
const router = express.Router();
const { testarAPI } = require('../controllers/indexControler');

router.get('/teste', testarAPI);

module.exports = router;
