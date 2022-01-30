const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "alternatecms",
  password: "Libra1986",
  port: 5432,
  host: "localhost",
  connectionLimit: 10
});

pool.connect(function(err) {
  if (err) throw err;
  const query = "SELECT * FROM Articles, Billing_Agreements, Cart_Price_Rules, Catalog_Price_Rules, Categories, Cities, Countries, Comments, Coupons, CreditMemos, CurrencyRates, CurrencySymbols, Customers, GiftCertificates, Glossaries, Invoices, NewsletterQueue, NewsletterSubscribers, Orders, Pages, Polls, ProductAttributes, ProductAttributeSets, Products, Quotes, Ratings, Reviews, RewardPoints, Roles, Shipments, Shops, Sources, SpecialDiscounts, States, Statistics, Stocks, Tags, TaxRates, TaxRules, Themes, UrlRewrites";
  pool.query(query, function (err, result) {
    if (err) throw err;
    console.log("Tables Selected created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const products = "CREATE TABLE products ( id SERIAL PRIMARY KEY, sku SERIAL, thumbnail text, name varchar(255) NOT NULL, type text, attribute_set text, price money, quantity_per_source text, salable_quantity text, visibility text, status boolean, websites text, product text, tax_class text, stock_status text, weight int, categories text, new_from date, country text, size int, format text, quantity_size int, description varchar, short_description varchar (255), image text, meta_title text, meta_keywords text, meta_description text, meta_url text, file text )";
  pool.query(products, function (err, result) {
    if (err) throw err;
    console.log("Products Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const shops = "CREATE TABLE shops (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, description text, image text, website varchar(255), products text, articles text, customers text, comments text, coupons text, categories text, polls text, quotes text, reviews text, gift_certificates text, rating text, tags text, users text, invoices text, reports text, reward_points text, special_discounts text, statistics text, stocks text)";
  pool.query(shops, function (err, result) {
    if (err) throw err;
    console.log("Shops Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const shipments = "CREATE TABLE shipments (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, description text, tracking text, received_date date, ship_date date, returns text, image text, published timestamp, categories text, articles text, products text, customers text, users text)";
  pool.query(shipments, function (err, result) {
    if (err) throw err;
    console.log("Shipments Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const statistics = "CREATE TABLE statistics (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), description text, image text, published timestamp, special_offers text, reports text, rewards text, coupons text, expiration date, categories text, articles text, products text, customers text, users text)";
  pool.query(statistics, function (err, result) {
    if (err) throw err;
    console.log("Statistics Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const giftCertificates = "CREATE TABLE gift_certificates (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), discount money, image text, published timestamp, special_offers text, rewards text, coupons text, expiration date, categories text, articles text, products text, customers text, users text)";
  pool.query(giftCertificates, function (err, result) {
    if (err) throw err;
    console.log("Gift Certificates Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const specialDiscounts = "CREATE TABLE special_discounts (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), discount money, image text, published timestamp, rewards text, coupons text, expiration date, categories text, articles text, products text, customers text, users text)";
  pool.query(specialDiscounts, function (err, result) {
    if (err) throw err;
    console.log("Special Discounts Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const rewardPoints = "CREATE TABLE reward_points (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), discount money, image text, published timestamp, coupons text, expiration date, categories text, articles text, products text, customers text, users text)";
  pool.query(rewardPoints, function (err, result) {
    if (err) throw err;
    console.log("Reward Points Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const coupons = "CREATE TABLE coupons (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), discount money, image text, published timestamp, expiration date, categories text, articles text, products text, customers text, users text)";
  pool.query(coupons, function (err, result) {
    if (err) throw err;
    console.log("Coupons Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const quotes = "CREATE TABLE quotes (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), image text, published timestamp, categories text, articles text, products text, customers text, users text)";
  pool.query(quotes, function (err, result) {
    if (err) throw err;
    console.log("Quotes Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const polls = "CREATE TABLE polls (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar(255), description text, image text, published timestamp, question varchar(255), response varchar (255), categories text, articles text, products text, customers text, users text)";
  pool.query(polls, function (err, result) {
    if (err) throw err;
    console.log("Polls Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const articles = "CREATE TABLE articles (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL UNIQUE, excerpt varchar (255) NOT NULL, description text, image text, categories text, customers text, users text, published timestamp)";
  pool.query(articles, function (err, result) {
    if (err) throw err;
    console.log("Articles Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const comments = "CREATE TABLE comments (id SERIAL PRIMARY KEY, customer_name varchar(255) NOT NULL UNIQUE, description varchar(255), image text, response text UNIQUE, published timestamp)";
  pool.query(comments, function (err, result) {
    if (err) throw err;
    console.log("Comments Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const glossary = "CREATE TABLE glossary (id SERIAL PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255), image text, published timestamp)";
  pool.query(glossary, function (err, result) {
    if (err) throw err;
    console.log("Glossary Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const cities = "CREATE TABLE cities (id SERIAL PRIMARY KEY,, name varchar(255) NOT NULL, description varchar(255))";
  pool.query(cities, function (err, result) {
    if (err) throw err;
    console.log("Cities Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const states = "CREATE TABLE states (id SERIAL PRIMARY KEY,, name varchar(255) NOT NULL, description varchar(255))";
  pool.query(states, function (err, result) {
    if (err) throw err;
    console.log("States Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const countries = "CREATE TABLE countries (id SERIAL PRIMARY KEY,, name varchar(255) NOT NULL, description varchar(255))";
  pool.query(countries, function (err, result) {
    if (err) throw err;
    console.log("Countries Table created");
  });
});

pool.connect(function(err) {
  if (err) throw err;
  const role = "CREATE TABLE role (id SERIAL PRIMARY KEY,, role_name varchar(255) NOT NULL UNIQUE)";
  pool.query(role, function (err, result) {
    if (err) throw err;
    console.log("Role Table created");
  });
});
module.exports = { pool };