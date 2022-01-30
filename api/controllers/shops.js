/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Shop = db.shops;
const Op = db.Sequelize.Op;

// Insert new shop
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a shop
  const shop = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    website: req.body.website,
    products: req.body.products,
    articles: req.body.articles,
    customers: req.body.customers,
    comments: req.body.comments,
    coupons: req.body.coupons,
    categories: req.body.categories,
    polls: req.body.polls,
    quotes: req.body.quotes,
    reviews: req.body.reviews,
    gift_certificates: req.body.gift_certificates,
    rating: req.body.rating,
    tags: req.body.tags,
    users: req.body.users,
    invoices: req.body.invoices,
    reports: req.body.reports,
    reward_points: req.body.reward_points,
    special_discounts: req.body.special_discounts,
    statistics: req.body.statistics,
    stocks: req.body.stocks
  };

  // Save shop in the database
  Shop.create(shop)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Shop."
      });
    });
};

// Retrieve all shops
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Shop.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
  
};

// search a single shop with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Shop.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Shop with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Shop with id=" + id
      });
    });
};

// Update a shop details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Shop.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Shop."
        });
      } else {
        res.send({
          message: `Can't update shop with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Shop with id=" + id
      });
    });
};

// remove a shop with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Shop.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted shop!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Shop with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Shop with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Shop.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shops."
      });
    });
};