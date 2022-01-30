/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Creditmemos = db.creditmemos;
const Op = db.Sequelize.Op;

// Insert new creditmemos
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a creditmemos
  const creditmemos = {
    name: req.body.name,
    admission: req.body.admission,
    class:req.body.class,
    city:req.body.city
  };

  // Save creditmemos in the database
  Creditmemos.create(creditmemos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Creditmemos."
      });
    });
};

// Retrieve all creditmemoss
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Creditmemos.findAll({ where: condition })
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

// search a single creditmemos with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Creditmemos.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Creditmemos with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Creditmemos with id=" + id
      });
    });
};

// Update a creditmemos details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Creditmemos.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Creditmemos."
        });
      } else {
        res.send({
          message: `Can't update creditmemos with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Creditmemos with id=" + id
      });
    });
};

// remove a creditmemos with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Creditmemos.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted creditmemos!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Creditmemos with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Creditmemos with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Creditmemos.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving credit memos."
      });
    });
};