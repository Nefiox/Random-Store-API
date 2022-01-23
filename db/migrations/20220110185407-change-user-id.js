'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
