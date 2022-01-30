'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.TEXT,
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    interface_locale: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    expiration_date: DataTypes.DATE,
    type_of_user: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};