/* eslint-disable node/no-path-concat */
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = require("../config/db.js");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.articles = require("./article.js")(sequelize, Sequelize);
db.billing_agreements = require("./billing_agreements.js")(sequelize, Sequelize);
db.cart_price_rules = require("./cart_price_rules.js")(sequelize, Sequelize);
db.catalog_price_rules = require("./catalog_price_rules.js")(sequelize, Sequelize);
db.categories = require("./categories.js")(sequelize, Sequelize);
db.cities = require("./cities.js")(sequelize, Sequelize);
db.comments = require("./comments.js")(sequelize, Sequelize);
db.countries = require("./countries.js")(sequelize, Sequelize);
db.coupons = require("./coupons.js")(sequelize, Sequelize);
db.creditmemos = require("./creditmemos.js")(sequelize, Sequelize);
db.currencyrates = require("./currencyrates.js")(sequelize, Sequelize);
db.currencysymbols = require("./currencysymbols.js")(sequelize, Sequelize);
db.customers = require("./customers.js")(sequelize, Sequelize);
db.giftcertificates = require("./giftcertificates.js")(sequelize, Sequelize);
db.glossary = require("./glossary.js")(sequelize, Sequelize);
db.invoices = require("./invoices.js")(sequelize, Sequelize);
db.newsletterqueue = require("./newsletterqueue.js")(sequelize, Sequelize);
db.newslettersubscribers = require("./newslettersubscribers.js")(sequelize, Sequelize);
db.orders = require("./orders.js")(sequelize, Sequelize);
db.pages = require("./pages.js")(sequelize, Sequelize);
db.polls = require("./polls.js")(sequelize, Sequelize);
db.productattributes = require("./productattribute.js")(sequelize, Sequelize);
db.productattributeset = require("./productattributeset.js")(sequelize, Sequelize);
db.products = require("./products.js")(sequelize, Sequelize);
db.quotes = require("./quotes.js")(sequelize, Sequelize);
db.rating = require("./rating.js")(sequelize, Sequelize);
db.reports = require("./reports.js")(sequelize, Sequelize);
db.reviews = require("./reviews.js")(sequelize, Sequelize);
db.rewardpoints = require("./rewardpoints.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);
db.shipments = require("./shipments.js")(sequelize, Sequelize);
db.shops = require("./shops.js")(sequelize, Sequelize);
db.source = require("./source.js")(sequelize, Sequelize);
db.specialdiscounts = require("./specialdiscounts.js")(sequelize, Sequelize);
db.states = require("./states.js")(sequelize, Sequelize);
db.statistics = require("./statistics.js")(sequelize, Sequelize);
db.stocks = require("./stocks.js")(sequelize, Sequelize);
db.tags = require("./tags.js")(sequelize, Sequelize);
db.taxrate = require("./taxrate.js")(sequelize, Sequelize);
db.taxrule = require("./taxrule.js")(sequelize, Sequelize);
db.themes = require("./themes.js")(sequelize, Sequelize);
db.urlrewrites = require("./urlrewrites.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
