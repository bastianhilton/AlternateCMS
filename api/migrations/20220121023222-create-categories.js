'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
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
      country: {
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
    await queryInterface.dropTable('Categories');
  }
};