'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      invoice_date: {
        type: Sequelize.DATE
      },
      bill_to_name: {
        type: Sequelize.TEXT
      },
      billing_address: {
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
      shipping_address: {
        type: Sequelize.TEXT
      },
      customer_name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      customer_group: {
        type: Sequelize.TEXT
      },
      payment_method: {
        type: Sequelize.TEXT
      },
      shipping_information: {
        type: Sequelize.TEXT
      },
      subtotal: {
        type: Sequelize.INTEGER
      },
      shipping_and_handling: {
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
    await queryInterface.dropTable('Invoices');
  }
};