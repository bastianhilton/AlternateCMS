'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RewardPoints', {
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
      excerpt: {
        type: Sequelize.TEXT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.DATE
      },
      coupons: {
        type: Sequelize.TEXT
      },
      expiration: {
        type: Sequelize.DATE
      },
      categories: {
        type: Sequelize.TEXT
      },
      articles: {
        type: Sequelize.TEXT
      },
      products: {
        type: Sequelize.TEXT
      },
      customers: {
        type: Sequelize.TEXT
      },
      users: {
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
    await queryInterface.dropTable('RewardPoints');
  }
};