'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    excerpt: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categories: DataTypes.STRING,
    customers: DataTypes.STRING,
    users: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};