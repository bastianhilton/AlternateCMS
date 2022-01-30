'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    sku: DataTypes.INTEGER,
    thumbnail: DataTypes.TEXT,
    type: DataTypes.TEXT,
    attribute_set: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    quantity_per_source: DataTypes.TEXT,
    salable_quantity: DataTypes.TEXT,
    visibility: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    websites: DataTypes.TEXT,
    product: DataTypes.TEXT,
    tax_class: DataTypes.TEXT,
    stock_status: DataTypes.BOOLEAN,
    weight: DataTypes.INTEGER,
    categories: DataTypes.TEXT,
    new_from: DataTypes.DATE,
    country: DataTypes.TEXT,
    size: DataTypes.INTEGER,
    format: DataTypes.TEXT,
    quantity_size: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    short_description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    meta_title: DataTypes.TEXT,
    meta_keywords: DataTypes.TEXT,
    meta_description: DataTypes.TEXT,
    meta_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};