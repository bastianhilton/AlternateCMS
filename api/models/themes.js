'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Themes.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.TEXT,
    parent_theme: DataTypes.TEXT,
    theme_path: DataTypes.TEXT,
    action: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Themes',
  });
  return Themes;
};