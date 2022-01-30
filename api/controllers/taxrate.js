/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Taxrate = db.taxrate;
const Op = db.Sequelize.Op;

// Insert new taxrate
exports.create = (req, res) => {
    if (!req.body.tax_identifier) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a taxrate
  const taxrate = {
    tax_identifier: req.body.tax_identifier,
    zip_post_is_range: req.body.zip_post_is_range,
    postcode:req.body.postcode,
    state:req.body.state,
    country:req.body.country,
    rate_percent:req.body.rate_percent,
    default_store_view:req.body.default_store_view
  };

  // Save taxrate in the database
  Taxrate.create(taxrate)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Taxrate."
      });
    });
};

// Retrieve all taxrate
exports.findAll = (req, res) => {

  const taxidentifier = req.query.tax_identifier;
  const condition = taxidentifier ? { tax_identifier: { [Op.like]: `%${taxidentifier}%` } } : null;

  Taxrate.findAll({ where: condition })
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

// search a single taxrate with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Taxrate.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Taxrate with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Taxrate with id=" + id
      });
    });
};

// Update a taxrate details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Taxrate.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Taxrate."
        });
      } else {
        res.send({
          message: `Can't update taxrate with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Taxrate with id=" + id
      });
    });
};

// remove a taxrate with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Taxrate.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted taxrate!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Taxrate with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Taxrate with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Taxrate.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving taxrate."
      });
    });
};