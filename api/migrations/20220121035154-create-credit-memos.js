'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditMemos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      credit_memo: {
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      created: {
        type: Sequelize.DATE
      },
      bill_to_name: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      refunded: {
        type: Sequelize.INTEGER
      },
      action: {
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
    await queryInterface.dropTable('CreditMemos');
  }
};