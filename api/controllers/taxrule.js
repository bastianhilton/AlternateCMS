/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Taxrule = db.taxrule;
const Op = db.Sequelize.Op;

// Insert new taxrule
exports.create = (req, res) => {
    if (!req.body.type) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a taxrule
  const taxrule = {
    type: req.body.type,
    tax_rate: req.body.tax_rate,
  };

  // Save taxrule in the database
  Taxrule.create(taxrule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Taxrule."
      });
    });
};

// Retrieve all taxrule
exports.findAll = (req, res) => {

  const type = req.query.type;
  const condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

  Taxrule.findAll({ where: condition })
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

// search a single taxrule with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Taxrule.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Taxrule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Taxrule with id=" + id
      });
    });
};

// Update a taxrule details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Taxrule.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Taxrule."
        });
      } else {
        res.send({
          message: `Can't update taxrule with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Taxrule with id=" + id
      });
    });
};

// remove a taxrule with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Taxrule.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted taxrule!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Taxrule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Taxrule with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Taxrule.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving taxrule."
      });
    });
};