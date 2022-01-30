'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shops.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    website: DataTypes.TEXT,
    products: DataTypes.TEXT,
    articles: DataTypes.TEXT,
    customers: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    coupons: DataTypes.TEXT,
    categories: DataTypes.TEXT,
    polls: DataTypes.TEXT,
    quotes: DataTypes.TEXT,
    reviews: DataTypes.TEXT,
    gift_certificates: DataTypes.TEXT,
    rating: DataTypes.TEXT,
    tags: DataTypes.TEXT,
    users: DataTypes.TEXT,
    invoices: DataTypes.TEXT,
    reports: DataTypes.TEXT,
    reward_points: DataTypes.TEXT,
    special_discounts: DataTypes.TEXT,
    statistics: DataTypes.TEXT,
    stocks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Shops',
  });
  return Shops;
};