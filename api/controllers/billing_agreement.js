/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Billingagreement = db.billingagreements;
const Op = db.Sequelize.Op;

// Insert new billingagreement
exports.create = (req, res) => {
    if (!req.body.reference_id) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a billingagreement
  const billingagreement = {
    reference_id: req.body.reference_id,
    created: req.body.created,
    first_reference_id: req.body.first_reference_id,
    last_reference_id: req.body.last_reference_id,
    status: req.body.status,
    updated: req.body.updated,
    action: req.body.action
  };

  // Save billingagreement in the database
  Billingagreement.create(billingagreement)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Billingagreement."
      });
    });
};

// Retrieve all billingagreements
exports.findAll = (req, res) => {

  const referenceId = req.query.reference_id;
  const condition = referenceId ? { reference_id: { [Op.like]: `%${referenceId}%` } } : null;

  Billingagreement.findAll({ where: condition })
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

// search a single billingagreement with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Billingagreement.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Billingagreement with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Billingagreement with id=" + id
      });
    });
};

// Update a billingagreement details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Billingagreement.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Billingagreement."
        });
      } else {
        res.send({
          message: `Can't update billingagreement with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Billingagreement with id=" + id
      });
    });
};

// remove a billingagreement with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Billingagreement.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted billingagreement!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Billingagreement with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Billingagreement with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Billingagreement.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving billing agreements."
      });
    });
};