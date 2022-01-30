'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shipment: {
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      ship_date: {
        type: Sequelize.DATE
      },
      ship_to_name: {
        type: Sequelize.TEXT
      },
      order_date: {
        type: Sequelize.DATE
      },
      total_quantity: {
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
    await queryInterface.dropTable('Shipments');
  }
};