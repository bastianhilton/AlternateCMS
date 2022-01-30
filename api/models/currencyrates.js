'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurrencyRates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CurrencyRates.init({
    import_service: DataTypes.TEXT,
    usd: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CurrencyRates',
  });
  return CurrencyRates;
};