/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Source = db.sources;
const Op = db.Sequelize.Op;

// Insert new source
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a source
  const source = {
    name: req.body.name,
    code: req.body.code,
    enabled:req.body.enabled,
    description:req.body.description,
    latitude:req.body.latitude,
    longtitude:req.body.longtitude,
    pickup_location:req.body.pickup_location,
    contact_name:req.body.contact_name,
    email:req.body.email,
    phone:req.body.phone,
    fax:req.body.fax,
    country:req.body.country,
    state:req.body.state,
    city:req.body.city,
    street:req.body.street,
    postcode:req.body.postcode
  };

  // Save source in the database
  Source.create(source)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Source."
      });
    });
};

// Retrieve all sources
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Source.findAll({ where: condition })
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

// search a single source with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Source.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Source with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Source with id=" + id
      });
    });
};

// Update a source details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Source.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Source."
        });
      } else {
        res.send({
          message: `Can't update source with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Source with id=" + id
      });
    });
};

// remove a source with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Source.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted source!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Source with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Source with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Source.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sources."
      });
    });
};