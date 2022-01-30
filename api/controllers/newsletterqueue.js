/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Newsletterqueue = db.newsletterqueues;
const Op = db.Sequelize.Op;

// Insert new newsletterqueue
exports.create = (req, res) => {
    if (!req.body.queue_start) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a newsletterqueue
  const newsletterqueue = {
    queue_start: req.body.queue_start,
    queue_end: req.body.queue_end,
    subject: req.body.subject,
    status: req.body.status,
    processed: req.body.processed,
    recipents: req.body.recipents,
    action: req.body.action
  };

  // Save newsletterqueue in the database
  Newsletterqueue.create(newsletterqueue)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Newsletterqueue."
      });
    });
};

// Retrieve all newsletterqueues
exports.findAll = (req, res) => {

  const queueStart = req.query.queue_start;
  const condition = queueStart ? { queue_start: { [Op.like]: `%${queueStart}%` } } : null;

  Newsletterqueue.findAll({ where: condition })
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

// search a single newsletterqueue with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Newsletterqueue.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Newsletterqueue with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Newsletterqueue with id=" + id
      });
    });
};

// Update a newsletterqueue details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Newsletterqueue.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Newsletterqueue."
        });
      } else {
        res.send({
          message: `Can't update newsletterqueue with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Newsletterqueue with id=" + id
      });
    });
};

// remove a newsletterqueue with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Newsletterqueue.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted newsletterqueue!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Newsletterqueue with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Newsletterqueue with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Newsletterqueue.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving newsletterqueue."
      });
    });
};