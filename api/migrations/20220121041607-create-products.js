'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
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
      sku: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      attribute_set: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity_per_source: {
        type: Sequelize.TEXT
      },
      salable_quantity: {
        type: Sequelize.TEXT
      },
      visibility: {
        type: Sequelize.TEXT
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
      tax_class: {
        type: Sequelize.TEXT
      },
      stock_status: {
        type: Sequelize.BOOLEAN
      },
      weight: {
        type: Sequelize.INTEGER
      },
      categories: {
        type: Sequelize.TEXT
      },
      new_from: {
        type: Sequelize.DATE
      },
      country: {
        type: Sequelize.TEXT
      },
      size: {
        type: Sequelize.INTEGER
      },
      format: {
        type: Sequelize.TEXT
      },
      quantity_size: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};