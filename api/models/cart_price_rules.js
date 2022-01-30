'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartPriceRules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartPriceRules.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    rule: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    coupon: DataTypes.STRING,
    uses_per_customer: DataTypes.STRING,
    priority: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.TEXT,
    website: DataTypes.TEXT,
    actions_apply: DataTypes.TEXT,
    actions_discount_amount: DataTypes.TEXT,
    actions_discard_subsequent_rules: DataTypes.TEXT,
    actions_max_qty_discount_is_applied_to: DataTypes.TEXT,
    actions_discount_qty_step: DataTypes.TEXT,
    actions_apply_shipping_amount: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CartPriceRules',
  });
  return CartPriceRules;
};