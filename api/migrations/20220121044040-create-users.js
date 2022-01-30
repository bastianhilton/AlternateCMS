'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.TEXT
      },
      first_name: {
        type: Sequelize.TEXT
      },
      last_name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      interface_locale: {
        type: Sequelize.TEXT
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      type_of_user: {
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
    await queryInterface.dropTable('Users');
  }
};