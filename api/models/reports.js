'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reports.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    customer: DataTypes.TEXT,
    email: DataTypes.TEXT,
    products: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,
    applied_coupon: DataTypes.TEXT,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
    ip_address: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reports',
  });
  return Reports;
};