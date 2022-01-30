'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoices.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    order_number: DataTypes.INTEGER,
    invoice_date: DataTypes.DATE,
    bill_to_name: DataTypes.TEXT,
    billing_address: DataTypes.TEXT,
    grand_total_base: DataTypes.INTEGER,
    grand_total_purchased: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    action: DataTypes.BOOLEAN,
    shipping_address: DataTypes.TEXT,
    customer_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    customer_group: DataTypes.TEXT,
    payment_method: DataTypes.TEXT,
    shipping_information: DataTypes.TEXT,
    subtotal: DataTypes.INTEGER,
    shipping_and_handling: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invoices',
  });
  return Invoices;
};