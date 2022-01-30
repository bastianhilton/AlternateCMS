'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      code: {
        type: Sequelize.INTEGER
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      latitude: {
        type: Sequelize.TEXT
      },
      longtitude: {
        type: Sequelize.TEXT
      },
      pickup_location: {
        type: Sequelize.BOOLEAN
      },
      contact_name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.INTEGER
      },
      fax: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      street: {
        type: Sequelize.TEXT
      },
      postcode: {
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
    await queryInterface.dropTable('Sources');
  }
};