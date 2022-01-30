/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Cartpricerule = db.cartpricerules;
const Op = db.Sequelize.Op;

// Insert new cartpricerule
exports.create = (req, res) => {
    if (!req.body.rule) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a cartpricerule
  const cartpricerule = {
    rule: req.body.rule,
    description: req.body.description,
    active: req.body.active,
    coupon: req.body.coupon,
    uses_per_customer: req.body.uses_per_customer,
    priority: req.body.priority,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.status,
    website: req.body.website,
    actions_apply: req.body.actions_apply,
    actions_discount_amount: req.body.actions_discount_amount,
    actions_discard_subsequent_rules: req.body.actions_discard_subsequent_rules,
    actions_max_qty_discount_is_applied_to: req.body.actions_max_qty_discount_is_applied_to,
    actions_discount_qty_step: req.body.actions_discount_qty_step,
    actions_apply_shipping_amount: req.body.actions_apply_shipping_amount
  };

  // Save cartpricerule in the database
  Cartpricerule.create(cartpricerule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Cartpricerule."
      });
    });
};

// Retrieve all cartpricerules
exports.findAll = (req, res) => {

  const rule = req.query.rule;
  const condition = rule ? { rule: { [Op.like]: `%${rule}%` } } : null;

  Cartpricerule.findAll({ where: condition })
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

// search a single cartpricerule with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cartpricerule.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cartpricerule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cartpricerule with id=" + id
      });
    });
};

// Update a cartpricerule details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cartpricerule.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Cartpricerule."
        });
      } else {
        res.send({
          message: `Can't update cartpricerule with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Cartpricerule with id=" + id
      });
    });
};

// remove a cartpricerule with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Cartpricerule.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted cartpricerule!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Cartpricerule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Cartpricerule with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Cartpricerule.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cart price rule."
      });
    });
};