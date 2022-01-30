'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UrlRewrites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      request_path: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      redirect_type: {
        type: Sequelize.BOOLEAN
      },
      target_path: {
        type: Sequelize.TEXT
      },
      store: {
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
    await queryInterface.dropTable('UrlRewrites');
  }
};