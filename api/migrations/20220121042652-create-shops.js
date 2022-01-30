'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
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
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      products: {
        type: Sequelize.TEXT
      },
      articles: {
        type: Sequelize.TEXT
      },
      customers: {
        type: Sequelize.TEXT
      },
      comments: {
        type: Sequelize.TEXT
      },
      coupons: {
        type: Sequelize.TEXT
      },
      categories: {
        type: Sequelize.TEXT
      },
      polls: {
        type: Sequelize.TEXT
      },
      quotes: {
        type: Sequelize.TEXT
      },
      reviews: {
        type: Sequelize.TEXT
      },
      gift_certificates: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.TEXT
      },
      users: {
        type: Sequelize.TEXT
      },
      invoices: {
        type: Sequelize.TEXT
      },
      reports: {
        type: Sequelize.TEXT
      },
      reward_points: {
        type: Sequelize.TEXT
      },
      special_discounts: {
        type: Sequelize.TEXT
      },
      statistics: {
        type: Sequelize.TEXT
      },
      stocks: {
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
    await queryInterface.dropTable('Shops');
  }
};