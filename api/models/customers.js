'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customers.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    thumbnail: DataTypes.TEXT,
    name_prefix: DataTypes.TEXT,
    first_name: DataTypes.TEXT,
    middle_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    customer_group: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    websites: DataTypes.TEXT,
    product: DataTypes.TEXT,
    country: DataTypes.TEXT,
    state: DataTypes.TEXT,
    customer_since: DataTypes.DATE,
    confirmed_email: DataTypes.BOOLEAN,
    date_of_birth: DataTypes.DATE,
    tax_vat_number: DataTypes.INTEGER,
    gender: DataTypes.TEXT,
    description: DataTypes.TEXT,
    short_description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    meta_title: DataTypes.TEXT,
    meta_keywords: DataTypes.TEXT,
    meta_description: DataTypes.TEXT,
    meta_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};