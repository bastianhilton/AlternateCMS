/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Catalogpricerule = db.catalogpricerules;
const Op = db.Sequelize.Op;

// Insert new catalogpricerule
exports.create = (req, res) => {
    if (!req.body.rule) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a catalogpricerule
  const catalogpricerule = {
    rule: req.body.rule,
    description: req.body.description,
    active: req.body.active,
    priority: req.body.priority,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.status,
    website: req.body.website,
    actions_apply: req.body.actions_apply,
    actions_discount_amount: req.body.actions_discount_amount,
    actions_discard_subsequent_rules: req.body.actions_discard_subsequent_rules
  };

  // Save catalogpricerule in the database
  Catalogpricerule.create(catalogpricerule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Catalogpricerule."
      });
    });
};

// Retrieve all catalogpricerules
exports.findAll = (req, res) => {

  const rule = req.query.rule;
  const condition = rule ? { rule: { [Op.like]: `%${rule}%` } } : null;

  Catalogpricerule.findAll({ where: condition })
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

// search a single catalogpricerule with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Catalogpricerule.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Catalogpricerule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Catalogpricerule with id=" + id
      });
    });
};

// Update a catalogpricerule details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Catalogpricerule.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Catalogpricerule."
        });
      } else {
        res.send({
          message: `Can't update catalogpricerule with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Catalogpricerule with id=" + id
      });
    });
};

// remove a catalogpricerule with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Catalogpricerule.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted catalogpricerule!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Catalogpricerule with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Catalogpricerule with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Catalogpricerule.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving catalog price rules."
      });
    });
};