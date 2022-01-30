'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    default_value: DataTypes.TEXT,
    default_store_view: DataTypes.TEXT,
    rating_visibility: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    sort_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};