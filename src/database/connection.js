const Sequelize = require('sequelize');
const config = require('./../config/config.js');

const environment = process.env.NODE_ENV || 'development';
const sequelizeOptions = config[environment];

const sequelize = new Sequelize(sequelizeOptions);

module.exports = sequelize;