const express = require('express');
const {loginController} = require('../controllers/loginControllers');

const router = express.Router();

// Rota para criar uma conta
router.post('/login', loginController.login);
router.get('/restrito', loginController.autenticacaoMiddleware,(req, res)=>{
    res.json({ mensagem: 'Acesso restrito permitido', usuario: req.usuario });
});

module.exports = router;