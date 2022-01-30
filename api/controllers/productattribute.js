/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Productattribute = db.productattributes;
const Op = db.Sequelize.Op;

// Insert new productattribute
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a productattribute
  const productattribute = {
    name: req.body.name,
    admission: req.body.admission,
    class:req.body.class,
    city:req.body.city
  };

  // Save productattribute in the database
  Productattribute.create(productattribute)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Productattribute."
      });
    });
};

// Retrieve all productattributes
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Productattribute.findAll({ where: condition })
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

// search a single productattribute with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Productattribute.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Productattribute with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Productattribute with id=" + id
      });
    });
};

// Update a productattribute details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Productattribute.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Productattribute."
        });
      } else {
        res.send({
          message: `Can't update productattribute with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Productattribute with id=" + id
      });
    });
};

// remove a productattribute with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Productattribute.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted productattribute!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Productattribute with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Productattribute with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Productattribute.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productattributes."
      });
    });
};