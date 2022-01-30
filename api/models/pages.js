'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pages.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    enable_page: DataTypes.BOOLEAN,
    title: DataTypes.TEXT,
    content_title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    url_key: DataTypes.TEXT,
    meta_title: DataTypes.TEXT,
    meta_keywords: DataTypes.TEXT,
    meta_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Pages',
  });
  return Pages;
};