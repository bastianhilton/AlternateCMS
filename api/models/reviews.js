'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    sku: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    websites: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};