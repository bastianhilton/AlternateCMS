'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NewsletterQueues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      queue_start: {
        type: Sequelize.DATE
      },
      queue_end: {
        type: Sequelize.DATE
      },
      subject: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      processed: {
        type: Sequelize.DATE
      },
      recipents: {
        type: Sequelize.DATE
      },
      action: {
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
    await queryInterface.dropTable('NewsletterQueues');
  }
};