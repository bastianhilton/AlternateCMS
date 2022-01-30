/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Glossary = db.glossaries;
const Op = db.Sequelize.Op;

// Insert new glossary
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a glossary
  const glossary = {
    name: req.body.name,
    description: req.body.description,
    image:req.body.image,
    published:req.body.published
  };

  // Save glossary in the database
  Glossary.create(glossary)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Glossary."
      });
    });
};

// Retrieve all glossaries
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Glossary.findAll({ where: condition })
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

// search a single glossary with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Glossary.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Glossary with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Glossary with id=" + id
      });
    });
};

// Update a glossary details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Glossary.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Glossary."
        });
      } else {
        res.send({
          message: `Can't update glossary with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Glossary with id=" + id
      });
    });
};

// remove a glossary with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Glossary.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted glossary!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Glossary with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Glossary with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Glossary.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving glossaries."
      });
    });
};