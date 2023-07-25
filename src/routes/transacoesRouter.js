const express = require('express');
const {transacaoController} =
    require('../controllers/transacoesController');
const {loginController} = require("../controllers/loginControllers");

const router = express.Router();

router.use('/transacoes',loginController.autenticacaoMiddleware);
router.post('/transacoes', transacaoController.criarTransacao);

module.exports = router;