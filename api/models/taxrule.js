'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaxRule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaxRule.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    tax_rate: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TaxRule',
  });
  return TaxRule;
};