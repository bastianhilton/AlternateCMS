'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlRewrites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlRewrites.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    request_path: DataTypes.TEXT,
    description: DataTypes.TEXT,
    redirect_type: DataTypes.BOOLEAN,
    target_path: DataTypes.TEXT,
    store: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UrlRewrites',
  });
  return UrlRewrites;
};