const express = require('express');
const router = express.Router();
const { registrarUsuario, getUser, editUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', registrarUsuario);
router.get('/', authMiddleware, getUser)
router.put('/', authMiddleware, editUser)
router.delete('/', deleteUser)


module.exports = router;