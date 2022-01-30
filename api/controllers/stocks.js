/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Stock = db.stockss;
const Op = db.Sequelize.Op;

// Insert new stocks
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a stocks
  const stocks = {
    name: req.body.name,
    enabled: req.body.enabled,
    description:req.body.description,
    website:req.body.website,
    sources:req.body.sources
  };

  // Save stocks in the database
  Stock.create(stocks)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Stock."
      });
    });
};

// Retrieve all stockss
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Stock.findAll({ where: condition })
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

// search a single stocks with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stock.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Stock with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stock with id=" + id
      });
    });
};

// Update a stocks details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Stock.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Stock."
        });
      } else {
        res.send({
          message: `Can't update stocks with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Stock with id=" + id
      });
    });
};

// remove a stocks with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Stock.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted stocks!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Stock with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Stock with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Stock.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stocks."
      });
    });
};