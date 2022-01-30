'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatalogPriceRules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CatalogPriceRules.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    rule: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    priority: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.TEXT,
    website: DataTypes.TEXT,
    actions_apply: DataTypes.TEXT,
    actions_discount_amount: DataTypes.TEXT,
    actions_discard_subsequent_rules: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CatalogPriceRules',
  });
  return CatalogPriceRules;
};