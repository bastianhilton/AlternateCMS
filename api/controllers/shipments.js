/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Shipment = db.shipments;
const Op = db.Sequelize.Op;

// Insert new shipment
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a shipment
  const shipment = {
    shipment: req.body.shipment,
    order_number: req.body.order_date,
    ship_date: req.body.ship_date,
    ship_to_name: req.body.ship_to_name,
    order_date: req.body.order_date,
    total_quantity: req.body.total_quantity,
    action: req.body.action
  };

  // Save shipment in the database
  Shipment.create(shipment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Shipment."
      });
    });
};

// Retrieve all shipments
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Shipment.findAll({ where: condition })
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

// search a single shipment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Shipment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Shipment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Shipment with id=" + id
      });
    });
};

// Update a shipment details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Shipment.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Shipment."
        });
      } else {
        res.send({
          message: `Can't update shipment with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Shipment with id=" + id
      });
    });
};

// remove a shipment with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Shipment.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted shipment!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Shipment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Shipment with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Shipment.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shipment."
      });
    });
};