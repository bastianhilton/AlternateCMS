'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductAttributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      default_label: {
        type: Sequelize.TEXT
      },
      catalog_input_type_store_owner: {
        type: Sequelize.TEXT
      },
      values_required: {
        type: Sequelize.BOOLEAN
      },
      attributes_code: {
        type: Sequelize.TEXT
      },
      scope: {
        type: Sequelize.TEXT
      },
      default_value: {
        type: Sequelize.TEXT
      },
      unique_value: {
        type: Sequelize.BOOLEAN
      },
      input_validation_store_owner: {
        type: Sequelize.TEXT
      },
      add_column_options: {
        type: Sequelize.BOOLEAN
      },
      filter_options: {
        type: Sequelize.BOOLEAN
      },
      use_search: {
        type: Sequelize.BOOLEAN
      },
      comparable_storefront: {
        type: Sequelize.BOOLEAN
      },
      layered_navigation: {
        type: Sequelize.BOOLEAN
      },
      search_results_layered_navigation: {
        type: Sequelize.BOOLEAN
      },
      position: {
        type: Sequelize.TEXT
      },
      promo_rule_conditions: {
        type: Sequelize.BOOLEAN
      },
      allow_html_tags_storefront: {
        type: Sequelize.BOOLEAN
      },
      visible_catalog_pages_storefront: {
        type: Sequelize.BOOLEAN
      },
      used_product_listing: {
        type: Sequelize.BOOLEAN
      },
      used_sorting_product_listing: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('ProductAttributes');
  }
};