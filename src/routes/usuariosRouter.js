const express = require('express');
const {usuariosController} = require('../controllers/usuariosControllers');

const router = express.Router();

router.post('/usuarios', usuariosController.createUsuario);

module.exports = router;