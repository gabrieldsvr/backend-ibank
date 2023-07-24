const Categorias = require('../models/categoriasModels');
const {Logger, EnumLogs} = require('logger-sequelize/src/app');
const {Op} = require('sequelize');

class CategoriasService {
    constructor() {
        if (!CategoriasService.instance) {
            // Coloque aqui toda a lógica de inicialização do serviço, se necessário
            CategoriasService.instance = this;
        }

        return CategoriasService.instance;
    }

    async criarCategoria(categoriasDTO) {
        try {
            const {nome, cor, icone, tipo, status} = categoriasDTO;


            if (!nome || !cor || !icone || !tipo) {
                throw new Error('Esta faltando dados.');
            }

            const novaCategoria = await Categorias.create({
                nome,
                cor,
                icone,
                tipo,
                status,
            });


            await Logger.createLog(
                "CategoriasService.criarCategoria",
                `Categoria ${novaCategoria.id} - Salvo com sucesso!`,
                EnumLogs.CREATED
            );

            return novaCategoria;
        } catch (error) {

            await Logger.createLog("CategoriasService.criarCategoria",
                `Erro ao criar a categoria: ${error.message}`,
                EnumLogs.ERROR);

            throw new Error(error);
        }
    }
}

const CategoriasServiceInstance = new CategoriasService();
Object.freeze(CategoriasServiceInstance);

module.exports = {"categoriasService": CategoriasServiceInstance};