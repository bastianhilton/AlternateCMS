'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      enable_page: {
        type: Sequelize.BOOLEAN
      },
      title: {
        type: Sequelize.TEXT
      },
      content_title: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      url_key: {
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
    await queryInterface.dropTable('Pages');
  }
};