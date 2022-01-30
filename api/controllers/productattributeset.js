/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Productattributeset = db.productattributesets;
const Op = db.Sequelize.Op;

// Insert new productattributeset
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a productattributeset
  const productattributeset = {
    name: req.body.name,
    based_on: req.body.based_on,
  };

  // Save productattributeset in the database
  Productattributeset.create(productattributeset)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Productattributeset."
      });
    });
};

// Retrieve all productattributesets
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Productattributeset.findAll({ where: condition })
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

// search a single productattributeset with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Productattributeset.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Productattributeset with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Productattributeset with id=" + id
      });
    });
};

// Update a productattributeset details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Productattributeset.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Productattributeset."
        });
      } else {
        res.send({
          message: `Can't update productattributeset with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Productattributeset with id=" + id
      });
    });
};

// remove a productattributeset with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Productattributeset.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted productattributeset!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Productattributeset with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Productattributeset with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Productattributeset.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving productattributesets."
      });
    });
};