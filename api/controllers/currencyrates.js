/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const CurrencyRates = db.currencyRates;
const Op = db.Sequelize.Op;

// Insert new currencyrates
exports.create = (req, res) => {
    if (!req.body.import_service) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a currencyrates
  const currencyrates = {
    import_service: req.body.import_service,
    usd: req.body.usd,
  };

  // Save currencyrates in the database
  CurrencyRates.create(currencyrates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the CurrencyRates."
      });
    });
};

// Retrieve all currencyRates
exports.findAll = (req, res) => {

  const importService = req.query.import_service;
  const condition = importService ? { import_service: { [Op.like]: `%${importService}%` } } : null;

  CurrencyRates.findAll({ where: condition })
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

// search a single currencyrates with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CurrencyRates.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CurrencyRates with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving CurrencyRates with id=" + id
      });
    });
};

// Update a currencyrates details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  CurrencyRates.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated CurrencyRates."
        });
      } else {
        res.send({
          message: `Can't update currencyrates with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update CurrencyRates with id=" + id
      });
    });
};

// remove a currencyrates with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  CurrencyRates.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted currencyrates!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete CurrencyRates with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete CurrencyRates with id=" + id
      });
    });
};