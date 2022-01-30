'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupons.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    excerpt: DataTypes.TEXT,
    discount: DataTypes.TEXT,
    image: DataTypes.TEXT,
    published: DataTypes.DATE,
    expiration: DataTypes.DATE,
    categories: DataTypes.TEXT,
    articles: DataTypes.TEXT,
    products: DataTypes.TEXT,
    customers: DataTypes.TEXT,
    users: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};