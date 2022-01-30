/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Rewardpoint = db.rewardpoints;
const Op = db.Sequelize.Op;

// Insert new rewardpoint
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a rewardpoint
  const rewardpoint = {
    name: req.body.name,
    excerpt: req.body.excerpt,
    discount: req.body.discount,
    image: req.body.image,
    published: req.body.published,
    coupons: req.body.coupons,
    expiration: req.body.expiration,
    categories: req.body.categories,
    articles: req.body.articles,
    rewardpoints: req.body.rewardpoints,
    customers: req.body.customers,
    users: req.body.users
  };

  // Save rewardpoint in the database
  Rewardpoint.create(rewardpoint)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Rewardpoint."
      });
    });
};

// Retrieve all rewardpoints
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Rewardpoint.findAll({ where: condition })
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

// search a single rewardpoint with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Rewardpoint.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Rewardpoint with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Rewardpoint with id=" + id
      });
    });
};

// Update a rewardpoint details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Rewardpoint.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Rewardpoint."
        });
      } else {
        res.send({
          message: `Can't update rewardpoint with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Rewardpoint with id=" + id
      });
    });
};

// remove a rewardpoint with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Rewardpoint.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted rewardpoint!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Rewardpoint with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Rewardpoint with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Rewardpoint.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reward points."
      });
    });
};