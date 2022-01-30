'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shipments.init({
    shipment: DataTypes.INTEGER,
    order_number: DataTypes.INTEGER,
    ship_date: DataTypes.DATE,
    ship_to_name: DataTypes.TEXT,
    order_date: DataTypes.DATE,
    total_quantity: DataTypes.INTEGER,
    action: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Shipments',
  });
  return Shipments;
};