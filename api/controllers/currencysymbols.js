/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const CurrencySymbols = db.currencysymbols;
const Op = db.Sequelize.Op;

// Insert new currencysymbols
exports.create = (req, res) => {
    if (!req.body.symbol) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a currencysymbols
  const currencysymbols = {
    symbol: req.body.symbol,
    use_standard: req.body.use_standard,
  };

  // Save currencysymbols in the database
  CurrencySymbols.create(currencysymbols)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the CurrencySymbols."
      });
    });
};

// Retrieve all currencysymbols
exports.findAll = (req, res) => {

  const symbol = req.query.symbol;
  const condition = symbol ? { symbol: { [Op.like]: `%${symbol}%` } } : null;

  CurrencySymbols.findAll({ where: condition })
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

// search a single currencysymbols with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CurrencySymbols.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CurrencySymbols with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving CurrencySymbols with id=" + id
      });
    });
};

// Update a currencysymbols details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  CurrencySymbols.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated CurrencySymbols."
        });
      } else {
        res.send({
          message: `Can't update currencysymbols with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update CurrencySymbols with id=" + id
      });
    });
};

// remove a currencysymbols with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  CurrencySymbols.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted currencysymbols!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete CurrencySymbols with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete CurrencySymbols with id=" + id
      });
    });
};