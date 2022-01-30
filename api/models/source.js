'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Source extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Source.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    code: DataTypes.INTEGER,
    enabled: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    latitude: DataTypes.TEXT,
    longtitude: DataTypes.TEXT,
    pickup_location: DataTypes.BOOLEAN,
    contact_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    fax: DataTypes.INTEGER,
    country: DataTypes.TEXT,
    state: DataTypes.TEXT,
    city: DataTypes.TEXT,
    street: DataTypes.TEXT,
    postcode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Source',
  });
  return Source;
};