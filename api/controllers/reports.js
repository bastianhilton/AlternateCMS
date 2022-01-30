/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Report = db.reports;
const Op = db.Sequelize.Op;

// Insert new report
exports.create = (req, res) => {
    if (!req.body.customer) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a report
  const report = {
    customer: req.body.customer,
    email: req.body.email,
    products: req.body.products,
    quantity: req.body.quantity,
    subtotal: req.body.subtotal,
    applied_coupon: req.body.applied_coupon,
    created: req.body.created,
    updated: req.body.updated,
    ip_address: req.body.ip_address
  };

  // Save report in the database
  Report.create(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Report."
      });
    });
};

// Retrieve all reports
exports.findAll = (req, res) => {

  const customer = req.query.customer;
  const condition = customer ? { customer: { [Op.like]: `%${customer}%` } } : null;

  Report.findAll({ where: condition })
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

// search a single report with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Report.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Report with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Report with id=" + id
      });
    });
};

// Update a report details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Report.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Report."
        });
      } else {
        res.send({
          message: `Can't update report with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Report with id=" + id
      });
    });
};

// remove a report with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Report.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted report!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Report with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Report with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Report.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });
};