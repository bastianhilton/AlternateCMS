'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Glossary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Glossary.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Glossary',
  });
  return Glossary;
};