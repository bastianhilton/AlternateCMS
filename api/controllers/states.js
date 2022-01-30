/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const State = db.states;
const Op = db.Sequelize.Op;

// Insert new state
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a state
  const state = {
    name: req.body.name,
    description: req.body.description
  };

  // Save state in the database
  State.create(state)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the State."
      });
    });
};

// Retrieve all states
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  State.findAll({ where: condition })
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

// search a single state with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  State.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find State with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving State with id=" + id
      });
    });
};

// Update a state details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  State.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated State."
        });
      } else {
        res.send({
          message: `Can't update state with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update State with id=" + id
      });
    });
};

// remove a state with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  State.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted state!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete State with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete State with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  State.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving states."
      });
    });
};