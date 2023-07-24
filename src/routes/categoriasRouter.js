const express = require('express');
const CategoriasController = require('../controllers/categoriasController');

const router = express.Router();
const categorias = new CategoriasController();

// Rota para criar uma conta
router.post('/categorias', categorias.createConta);

// Rota para buscar todas as contas
// router.get('/categorias', categorias.findContas);

module.exports = router;