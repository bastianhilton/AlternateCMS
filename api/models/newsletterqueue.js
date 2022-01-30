'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsletterQueue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsletterQueue.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    queue_start: DataTypes.DATE,
    queue_end: DataTypes.DATE,
    subject: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    processed: DataTypes.DATE,
    recipents: DataTypes.DATE,
    action: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NewsletterQueue',
  });
  return NewsletterQueue;
};