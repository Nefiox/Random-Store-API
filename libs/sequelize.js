const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models/');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: true }); // Se crea una instancia de Sequelize, gestiona el pooling.

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
