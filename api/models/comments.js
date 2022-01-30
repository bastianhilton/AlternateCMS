'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    customer_name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    response: DataTypes.TEXT,
    published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};