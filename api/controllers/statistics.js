/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Statistic = db.statistics;
const Op = db.Sequelize.Op;

// Insert new statistic
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a statistic
  const statistic = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    description:req.body.description,
    image:req.body.image,
    published:req.body.published,
    rewards:req.body.rewards,
    special_offers:req.body.special_offers,
    coupons:req.body.coupons,
    expiration:req.body.expiration,
    categories:req.body.categories,
    articles:req.body.articles,
    products:req.body.products,
    customers:req.body.customers,
    users:req.body.users
  };

  // Save statistic in the database
  Statistic.create(statistic)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Statistic."
      });
    });
};

// Retrieve all statistics
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Statistic.findAll({ where: condition })
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

// search a single statistic with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Statistic.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Statistic with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Statistic with id=" + id
      });
    });
};

// Update a statistic details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Statistic.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Statistic."
        });
      } else {
        res.send({
          message: `Can't update statistic with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Statistic with id=" + id
      });
    });
};

// remove a statistic with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Statistic.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted statistic!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Statistic with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Statistic with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Statistic.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving statistics."
      });
    });
};