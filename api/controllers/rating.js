/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Rating = db.ratings;
const Op = db.Sequelize.Op;

// Insert new rating
exports.create = (req, res) => {
    if (!req.body.default_value) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a rating
  const rating = {
    default_value: req.body.default_value,
    default_store_view: req.body.default_store_view,
    rating_visibility: req.body.rating_visibility,
    active: req.body.active,
    sort_order: req.body.sort_order
  };

  // Save rating in the database
  Rating.create(rating)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Rating."
      });
    });
};

// Retrieve all ratings
exports.findAll = (req, res) => {

  const defaultValue = req.query.default_value;
  const condition = defaultValue ? { default_value: { [Op.like]: `%${defaultValue}%` } } : null;

  Rating.findAll({ where: condition })
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

// search a single rating with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Rating.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Rating with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Rating with id=" + id
      });
    });
};

// Update a rating details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Rating.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Rating."
        });
      } else {
        res.send({
          message: `Can't update rating with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Rating with id=" + id
      });
    });
};

// remove a rating with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Rating.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted rating!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Rating with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Rating with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Rating.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ratings."
      });
    });
};