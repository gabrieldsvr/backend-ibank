const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');
const Contas = require("./contasModels");
const Categorias = require("./categoriasModels");


const Transacoes = sequelize.define('transacoes', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    conta: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: Contas,
            key: 'id'
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    anexo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    tipo: {
        type: DataTypes.ENUM('RECEITA', 'DESPESA'),
        allowNull: false,
    },
    categoria: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: Categorias,
            key: 'id'
        }
    },
    efetivado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});



module.exports = Transacoes;