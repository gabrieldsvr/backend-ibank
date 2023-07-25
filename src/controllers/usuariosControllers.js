const {usuariosServices} = require('../services/usuariosService');
const UsuarioDTO = require('../dto/usuarioDTO');
const {hash} = require("bcrypt");

class UsuariosController {
    constructor() {
        if (!UsuariosController.instance) {
            UsuariosController.instance = this;
        }
        return UsuariosController.instance;
    }

    async createUsuario(req, res) {
        try {
            const dataJson = req.body;

            dataJson.senha = await hash(dataJson.senha, 10);

            const usuarioDTO = new UsuarioDTO(dataJson);
            const novoUsuario = await usuariosServices.criarUsuario(usuarioDTO);
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

const UsuariosControllerInstance = new UsuariosController();
Object.freeze(UsuariosControllerInstance);

module.exports = {"usuariosController": UsuariosControllerInstance};