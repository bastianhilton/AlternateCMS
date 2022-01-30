'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistics', {
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
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.DATE
      },
      rewards: {
        type: Sequelize.TEXT
      },
      special_offers: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Statistics');
  }
};