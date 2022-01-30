/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

// Insert new order
exports.create = (req, res) => {
    if (!req.body.purchase_point) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a order
  const order = {
    purchase_point: req.body.purchase_point,
    purchase_date: req.body.purchase_date,
    bill_to_purchase_point: req.body.bill_to_purchase_point,
    ship_to_purchase_point: req.body.ship_to_purchase_point,
    grand_total_base: req.body.grand_total_base,
    grand_total_purchased: req.body.grand_total_purchased,
    status: req.body.status,
    action: req.body.action,
    allocated_sources: req.body.allocated_sources,
    braintree_transaction_source: req.body.braintree_transaction_source
  };

  // Save order in the database
  Order.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Order."
      });
    });
};

// Retrieve all orders
exports.findAll = (req, res) => {

  const purchasePoint = req.query.purchase_point;
  const condition = purchasePoint ? { purchase_point: { [Op.like]: `%${purchasePoint}%` } } : null;

  Order.findAll({ where: condition })
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

// search a single order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

// Update a order details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Order."
        });
      } else {
        res.send({
          message: `Can't update order with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Order with id=" + id
      });
    });
};

// remove a order with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted order!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Order with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Order.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};