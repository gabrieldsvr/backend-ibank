require('dotenv/config');
const sequelize = require('./connection.js');
const LogsModel = require("logger-sequelize/src/models/LogsModel");
const ContasModel = require("../models/contasModels");
const CategoriasModel = require("../models/categoriasModels");
const TransacoesModel = require("../models/transacoesModels");
const UsuariosModel = require("../models/usuariosModels");

const migration = async () => {
    try {
        await LogsModel.sync();
        await ContasModel.sync();
        await CategoriasModel.sync();
        await TransacoesModel.sync();
        await UsuariosModel.sync();

        await sequelize.sync({ alter: true });
        console.log('Tabelas sincronizadas com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    } finally {
        await console.log("Todas migrações executadas com sucesso!");
        await sequelize.close();
    }
};

module.exports = {
    migration
}