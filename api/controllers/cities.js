/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const City = db.cities;
const Op = db.Sequelize.Op;

// Insert new city
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a city
  const city = {
    name: req.body.name,
    description: req.body.description,
  };

  // Save city in the database
  City.create(city)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the City."
      });
    });
};

// Retrieve all cities
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  City.findAll({ where: condition })
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

// search a single city with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  City.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find City with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving City with id=" + id
      });
    });
};

// Update a city details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  City.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated City."
        });
      } else {
        res.send({
          message: `Can't update city with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update City with id=" + id
      });
    });
};

// remove a city with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  City.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted city!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete City with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete City with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  City.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cities."
      });
    });
};