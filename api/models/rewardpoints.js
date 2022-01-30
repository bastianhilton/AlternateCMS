'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RewardPoints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RewardPoints.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    excerpt: DataTypes.TEXT,
    discount: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    published: DataTypes.DATE,
    coupons: DataTypes.TEXT,
    expiration: DataTypes.DATE,
    categories: DataTypes.TEXT,
    articles: DataTypes.TEXT,
    products: DataTypes.TEXT,
    customers: DataTypes.TEXT,
    users: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RewardPoints',
  });
  return RewardPoints;
};