const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models/');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(config.dbUrl, options); // Se crea una instancia de Sequelize, gestiona el pooling.

setupModels(sequelize);
// sequelize.sync();

module.exports = sequelize;
