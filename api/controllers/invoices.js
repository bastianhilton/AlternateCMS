/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Invoice = db.invoices;
const Op = db.Sequelize.Op;

// Insert new invoice
exports.create = (req, res) => {
    if (!req.body.order_number) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a invoice
  const invoice = {
    order_number: req.body.order_number,
    invoice_date: req.body.invoice_date,
    bill_to_order_number: req.body.bill_to_order_number,
    billing_address: req.body.billing_address,
    grand_total_base: req.body.grand_total_base,
    grand_total_purchased: req.body.grand_total_purchased,
    status: req.body.status,
    action: req.body.action,
    shipping_address: req.body.shipping_address,
    customer_name: req.body.customer_name,
    email: req.body.email,
    customer_group: req.body.customer_group,
    payment_method: req.body.payment_method,
    shipping_information: req.body.shipping_information,
    subtotal: req.body.subtotal,
    shipping_and_handling: req.body.shipping_and_handling
  };

  // Save invoice in the database
  Invoice.create(invoice)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Invoice."
      });
    });
};

// Retrieve all invoices
exports.findAll = (req, res) => {

  const orderNumber = req.query.order_number;
  const condition = orderNumber ? { order_number: { [Op.like]: `%${orderNumber}%` } } : null;

  Invoice.findAll({ where: condition })
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

// search a single invoice with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Invoice.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Invoice with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Invoice with id=" + id
      });
    });
};

// Update a invoice details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Invoice.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Invoice."
        });
      } else {
        res.send({
          message: `Can't update invoice with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Invoice with id=" + id
      });
    });
};

// remove a invoice with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Invoice.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted invoice!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Invoice with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Invoice with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Invoice.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices."
      });
    });
};