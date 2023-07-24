const express = require('express');
const {transacaoController} = require('../controllers/transacoesController');

const router = express.Router();

// Rota para criar uma conta
router.post('/transacoes', transacaoController.criarTransacao);

// Rota para buscar todas as contas
// router.get('/categorias', categorias.findContas);

module.exports = router;