'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaxRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaxRate.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tax_identifier: DataTypes.INTEGER,
    zip_post_is_range: DataTypes.BOOLEAN,
    postcode: DataTypes.INTEGER,
    state: DataTypes.TEXT,
    country: DataTypes.TEXT,
    rate_percent: DataTypes.INTEGER,
    default_store_view: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TaxRate',
  });
  return TaxRate;
};