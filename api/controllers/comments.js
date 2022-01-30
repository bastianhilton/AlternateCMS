/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;

// Insert new comment
exports.create = (req, res) => {
    if (!req.body.customer_name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a comment
  const comment = {
    customer_name: req.body.customer_name,
    description: req.body.description,
    image:req.body.image,
    response:req.body.response,
    published:req.body.published
  };

  // Save comment in the database
  Comment.create(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Comment."
      });
    });
};

// Retrieve all comments
exports.findAll = (req, res) => {

  const customerName = req.query.customer_name;
  const condition = customerName ? { customer_name: { [Op.like]: `%${customerName}%` } } : null;

  Comment.findAll({ where: condition })
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

// search a single comment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comment with id=" + id
      });
    });
};

// Update a comment details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Comment.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Comment."
        });
      } else {
        res.send({
          message: `Can't update comment with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Comment with id=" + id
      });
    });
};

// remove a comment with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Comment.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted comment!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Comment with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Comment.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};