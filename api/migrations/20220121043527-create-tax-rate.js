'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaxRates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      tax_identifier: {
        type: Sequelize.INTEGER
      },
      zip_post_is_range: {
        type: Sequelize.BOOLEAN
      },
      postcode: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.TEXT
      },
      rate_percent: {
        type: Sequelize.INTEGER
      },
      default_store_view: {
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
    await queryInterface.dropTable('TaxRates');
  }
};