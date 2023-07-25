const express = require('express');
const {transacaoController} =
    require('../controllers/transacoesController');

const router = express.Router();

router.post('/transacoes', transacaoController.criarTransacao);

module.exports = router;