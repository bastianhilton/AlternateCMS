'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsletterSubscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsletterSubscribers.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    type: DataTypes.TEXT,
    customer_first_name: DataTypes.TEXT,
    customer_last_name: DataTypes.TEXT,
    store: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    websites: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NewsletterSubscribers',
  });
  return NewsletterSubscribers;
};