'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductAttribute.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    default_label: DataTypes.TEXT,
    catalog_input_type_store_owner: DataTypes.TEXT,
    values_required: DataTypes.BOOLEAN,
    attributes_code: DataTypes.TEXT,
    scope: DataTypes.TEXT,
    default_value: DataTypes.TEXT,
    unique_value: DataTypes.BOOLEAN,
    input_validation_store_owner: DataTypes.TEXT,
    add_column_options: DataTypes.BOOLEAN,
    filter_options: DataTypes.BOOLEAN,
    use_search: DataTypes.BOOLEAN,
    comparable_storefront: DataTypes.BOOLEAN,
    layered_navigation: DataTypes.BOOLEAN,
    search_results_layered_navigation: DataTypes.BOOLEAN,
    position: DataTypes.TEXT,
    promo_rule_conditions: DataTypes.BOOLEAN,
    allow_html_tags_storefront: DataTypes.BOOLEAN,
    visible_catalog_pages_storefront: DataTypes.BOOLEAN,
    used_product_listing: DataTypes.BOOLEAN,
    used_sorting_product_listing: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductAttribute',
  });
  return ProductAttribute;
};