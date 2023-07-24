const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('DESPESA', 'RECEITA'),
        allowNull: false,
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    icone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = Categorias;