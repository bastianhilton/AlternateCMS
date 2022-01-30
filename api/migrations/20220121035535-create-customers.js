'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      name_prefix: {
        type: Sequelize.TEXT
      },
      first_name: {
        type: Sequelize.TEXT
      },
      middle_name: {
        type: Sequelize.TEXT
      },
      last_name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      customer_group: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.INTEGER
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      websites: {
        type: Sequelize.TEXT
      },
      product: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      customer_since: {
        type: Sequelize.DATE
      },
      confirmed_email: {
        type: Sequelize.BOOLEAN
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      tax_vat_number: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      short_description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      meta_title: {
        type: Sequelize.TEXT
      },
      meta_keywords: {
        type: Sequelize.TEXT
      },
      meta_description: {
        type: Sequelize.TEXT
      },
      meta_url: {
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
    await queryInterface.dropTable('Customers');
  }
};