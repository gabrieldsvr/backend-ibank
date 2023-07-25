const {usuariosServices} = require('../services/usuariosService');
const UsuarioDTO = require('../dto/usuarioDTO');
const {hash} = require("bcrypt");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

class LoginController {

    constructor() {

        if (!LoginController.instance) {
            LoginController.instance = this;
        }
        return LoginController.instance;
    }

    async login(req, res) {
        try {
            const {email, senha} = req.body;

            const usuario = await usuariosServices.buscarUsuarioPorEmail(email);

            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

            if (!senhaCorreta) {
                return res.status(401).json({mensagem: 'Credenciais inválidas'});
            }

            const token = jwt.sign({usuario: usuario.id}, JWT_SECRET, {expiresIn: '5min'});

            res.json({token});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async autenticacaoMiddleware(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ mensagem: 'Token não fornecido' });
        }

        // Verifica e decodifica o token JWT
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(403).json({ mensagem: 'Token inválido' });
            }

            req.usuario = decodedToken.usuario;

            next();
        });
    }




}

const LoginControllerInstance = new LoginController();
Object.freeze(LoginControllerInstance);

module.exports = {"loginController": LoginControllerInstance};