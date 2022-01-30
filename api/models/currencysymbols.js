'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurrencySymbols extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CurrencySymbols.init({
    symbol: DataTypes.TEXT,
    use_standard: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CurrencySymbols',
  });
  return CurrencySymbols;
};