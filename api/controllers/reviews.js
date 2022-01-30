/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

// Insert new review
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a review
  const review = {
    name: req.body.name,
    sku: req.body.sku,
    price: req.body.price,
    quantity: req.body.quantity,
    status: req.body.status,
    websites: req.body.websites
  };

  // Save review in the database
  Review.create(review)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Review."
      });
    });
};

// Retrieve all reviews
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Review.findAll({ where: condition })
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

// search a single review with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Review.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Review with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Review with id=" + id
      });
    });
};

// Update a review details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Review.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Review."
        });
      } else {
        res.send({
          message: `Can't update review with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Review with id=" + id
      });
    });
};

// remove a review with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Review.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted review!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Review with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Review with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Review.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reviews."
      });
    });
};