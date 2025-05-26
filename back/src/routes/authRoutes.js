const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { getUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', login);
router.get('/profile', authMiddleware, getUser)

module.exports = router;