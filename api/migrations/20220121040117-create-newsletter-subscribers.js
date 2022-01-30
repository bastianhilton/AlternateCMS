'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NewsletterSubscribers', {
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
      email: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      customer_first_name: {
        type: Sequelize.TEXT
      },
      customer_last_name: {
        type: Sequelize.TEXT
      },
      store: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      websites: {
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
    await queryInterface.dropTable('NewsletterSubscribers');
  }
};