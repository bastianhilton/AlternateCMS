'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      products: {
        type: Sequelize.TEXT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      subtotal: {
        type: Sequelize.INTEGER
      },
      applied_coupon: {
        type: Sequelize.TEXT
      },
      created: {
        type: Sequelize.DATE
      },
      updated: {
        type: Sequelize.DATE
      },
      ip_address: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Reports');
  }
};