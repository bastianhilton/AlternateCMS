'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillingAgreement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BillingAgreement.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    reference_id: DataTypes.INTEGER,
    created: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    status: DataTypes.TEXT,
    updated: DataTypes.BOOLEAN,
    action: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BillingAgreement',
  });
  return BillingAgreement;
};