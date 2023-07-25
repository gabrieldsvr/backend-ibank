const {DataTypes} = require('sequelize');
const sequelize = require('../database/connection.js');

const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = Usuarios;