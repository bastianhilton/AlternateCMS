/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Country = db.countries;
const Op = db.Sequelize.Op;

// Insert new country
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a country
  const country = {
    name: req.body.name,
    description: req.body.description,
  };

  // Save country in the database
  Country.create(country)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Country."
      });
    });
};

// Retrieve all countries
exports.findAll = (req, res) => {

  const customerName = req.query.name;
  const condition = customerName ? { name: { [Op.like]: `%${customerName}%` } } : null;

  Country.findAll({ where: condition })
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

// search a single country with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Country.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Country with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Country with id=" + id
      });
    });
};

// Update a country details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Country.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Country."
        });
      } else {
        res.send({
          message: `Can't update country with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Country with id=" + id
      });
    });
};

// remove a country with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Country.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted country!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Country with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Country with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Country.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving countries."
      });
    });
};