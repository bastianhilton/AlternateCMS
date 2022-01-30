'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditMemos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreditMemos.init({
    credit_memo: DataTypes.INTEGER,
    order_number: DataTypes.INTEGER,
    created: DataTypes.DATE,
    bill_to_name: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    refunded: DataTypes.INTEGER,
    action: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CreditMemos',
  });
  return CreditMemos;
};