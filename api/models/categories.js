'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categories.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    thumbnail: DataTypes.TEXT,
    visibility: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    websites: DataTypes.TEXT,
    product: DataTypes.TEXT,
    country: DataTypes.TEXT,
    description: DataTypes.TEXT,
    short_description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    meta_title: DataTypes.TEXT,
    meta_keywords: DataTypes.TEXT,
    meta_description: DataTypes.TEXT,
    meta_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};