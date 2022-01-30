'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoreStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoreStore.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    key: DataTypes.TEXT,
    value: DataTypes.TEXT,
    type: DataTypes.TEXT,
    environment: DataTypes.TEXT,
    tag: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CoreStore',
  });
  return CoreStore;
};