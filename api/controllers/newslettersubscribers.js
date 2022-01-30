/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Newslettersubscriber = db.newslettersubscribers;
const Op = db.Sequelize.Op;

// Insert new newslettersubscriber
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a newslettersubscriber
  const newslettersubscriber = {
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    customer_first_name: req.body.customer_first_name,
    customer_last_name: req.body.customer_last_name,
    store: req.body.store,
    status: req.body.status,
    websites: req.body.websites
  };

  // Save newslettersubscriber in the database
  Newslettersubscriber.create(newslettersubscriber)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Newslettersubscriber."
      });
    });
};

// Retrieve all newslettersubscribers
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Newslettersubscriber.findAll({ where: condition })
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

// search a single newslettersubscriber with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Newslettersubscriber.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Newslettersubscriber with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Newslettersubscriber with id=" + id
      });
    });
};

// Update a newslettersubscriber details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Newslettersubscriber.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Newslettersubscriber."
        });
      } else {
        res.send({
          message: `Can't update newslettersubscriber with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Newslettersubscriber with id=" + id
      });
    });
};

// remove a newslettersubscriber with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Newslettersubscriber.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted newslettersubscriber!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Newslettersubscriber with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Newslettersubscriber with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Newslettersubscriber.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving newslettersubscribers."
      });
    });
};