const express = require('express');
const register = express.Router();
const { registrarUsuario } = require('../controllers/registerController');


register.post('/register', registrarUsuario);

module.exports = register;