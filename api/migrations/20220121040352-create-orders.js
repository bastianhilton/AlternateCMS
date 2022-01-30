'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      purchase_point: {
        type: Sequelize.INTEGER
      },
      purchase_date: {
        type: Sequelize.DATE
      },
      bill_to_name: {
        type: Sequelize.TEXT
      },
      ship_to_name: {
        type: Sequelize.TEXT
      },
      grand_total_base: {
        type: Sequelize.INTEGER
      },
      grand_total_purchased: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      action: {
        type: Sequelize.BOOLEAN
      },
      allocated_sources: {
        type: Sequelize.TEXT
      },
      braintree_transaction_source: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Orders');
  }
};