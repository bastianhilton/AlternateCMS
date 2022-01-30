'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cart_Price_Rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      rule: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      coupon: {
        type: Sequelize.STRING
      },
      uses_per_customer: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      actions_apply: {
        type: Sequelize.TEXT
      },
      actions_discount_amount: {
        type: Sequelize.TEXT
      },
      actions_discard_subsequent_rules: {
        type: Sequelize.TEXT
      },
      actions_max_qty_discount_is_applied_to: {
        type: Sequelize.TEXT
      },
      actions_discount_qty_step: {
        type: Sequelize.TEXT
      },
      actions_apply_shipping_amount: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cart_Price_Rules');
  }
};