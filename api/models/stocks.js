'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stocks.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    enabled: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    sources: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Stocks',
  });
  return Stocks;
};