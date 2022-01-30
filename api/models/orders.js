'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    purchase_point: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    bill_to_name: DataTypes.TEXT,
    ship_to_name: DataTypes.TEXT,
    grand_total_base: DataTypes.INTEGER,
    grand_total_purchased: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    action: DataTypes.BOOLEAN,
    allocated_sources: DataTypes.TEXT,
    braintree_transaction_source: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};