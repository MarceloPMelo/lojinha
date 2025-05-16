const express = require('express');
const router = express.Router();
const { registrarUsuario, getUser, editUser, deleteUser } = require('../controllers/registerController');


router.post('/register', registrarUsuario);
router.get('/register', getUser)
router.put('/register', editUser)
router.delete('/register', deleteUser)

module.exports = router;