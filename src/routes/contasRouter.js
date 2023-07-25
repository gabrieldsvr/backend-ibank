const express = require('express');
const ContasController = require('../controllers/contasController');
const {loginController} = require("../controllers/loginControllers");

const router = express.Router();
const contasController = new ContasController();

// Rota para criar uma conta

router.use('/contas',loginController.autenticacaoMiddleware);

router.post('/contas', contasController.createConta);

// Rota para buscar todas as contas
router.get('/contas', contasController.findContas);

// Rota para buscar uma conta pelo ‘ID’
router.get('/contas/:id', contasController.buscarContaPorId);

// Rota para atualizar uma conta pelo ‘ID’
router.put('/contas/:id', contasController.atualizarConta);

// Rota para excluir uma conta pelo ‘ID’
router.delete('/contas/:id', contasController.excluirConta);

// Rota para buscar contas com saldo maior que um valor especificado
router.get('/contas/saldo-maior-que/:valor', contasController.buscarContasComSaldoMaiorQue);

module.exports = router;