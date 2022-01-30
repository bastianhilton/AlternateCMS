/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Quote = db.quotes;
const Op = db.Sequelize.Op;

// Insert new quote
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a quote
  const quote = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    image: req.body.image,
    published: req.body.published,
    categories: req.body.categories,
    articles: req.body.articles,
    products: req.body.products,
    customers: req.body.customers,
    users: req.body.users
  };

  // Save quote in the database
  Quote.create(quote)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Quote."
      });
    });
};

// Retrieve all quotes
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Quote.findAll({ where: condition })
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

// search a single quote with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Quote.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Quote with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Quote with id=" + id
      });
    });
};

// Update a quote details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Quote.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Quote."
        });
      } else {
        res.send({
          message: `Can't update quote with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Quote with id=" + id
      });
    });
};

// remove a quote with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Quote.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted quote!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Quote with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Quote with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Quote.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quotes."
      });
    });
};