const Usuarios = require('../models/usuariosModels');
const {Logger, EnumLogs} = require("logger-sequelize/src/app"); // Importe o modelo Contas do arquivo models.js que contém a definição do modelo usando Sequelize

class UsuariosService {
    constructor() {
        if (!UsuariosService.instance) {
            UsuariosService.instance = this;
        }

        return UsuariosService.instance;
    }
    async criarUsuario(usuariosDTO) {
        try {

            const {nome, email, senha, status} = usuariosDTO;

            console.log({nome, email, senha, status})
            if (!nome || !email || !senha) {
                throw new Error('Esta faltando dados.');
            }
            return await Usuarios.create({
                nome,
                email,
                senha
            });
        } catch (error) {
            await Logger.createLog(
                "UsuariosService.criarUsuario",
                `Erro ao criar usuário: ${error.message}`,
                EnumLogs.ERROR
            );
            throw new Error(error);
        }
    }

    async buscarUsuarioPorId(id) {
        try {
            return await Usuarios.findByPk(id);
        } catch (error) {
            throw new Error(`Erro ao buscar o usuário por ID: ${error.message}`);
        }
    }

    async buscarUsuarioPorEmail(email) {
        try {
            return await Usuarios.findOne({where: {email}});
        } catch (error) {
            throw new Error(`Erro ao buscar o usuário por email: ${error.message}`);
        }
    }

    async atualizarUsuario(id, novosDadosUsuario) {
        try {
            const usuario = await Usuarios.findByPk(id);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            await usuario.update(novosDadosUsuario);
            return usuario;
        } catch (error) {
            throw new Error(`Erro ao atualizar o usuário: ${error.message}`);
        }
    }

    async excluirUsuario(id) {
        try {
            const usuario = await Usuarios.findByPk(id);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            await usuario.destroy();
            return usuario;
        } catch (error) {
            throw new Error(`Erro ao excluir o usuário: ${error.message}`);
        }
    }
}


const UserServiceInstance = new UsuariosService();
Object.freeze(UserServiceInstance);

module.exports = {"usuariosServices": UserServiceInstance};