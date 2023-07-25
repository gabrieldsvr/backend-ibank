const {DataTypes} = require('sequelize');
const sequelize = require('../database/connection.js');
const TiposContasEnum = require("../Enum/TiposContasEnum");
const Usuarios = require("./usuariosModels");

const Contas = sequelize.define('contas', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: Usuarios,
            key: 'id'
        }
    },
    banco: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "OUTROS",
    },
    tipo: {
        type: DataTypes.ENUM(...Object.values(TiposContasEnum)),
        allowNull: false,
    },
    saldo: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "#d4d4d4",
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = Contas;

