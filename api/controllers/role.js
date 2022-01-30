/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Role = db.roles;
const Op = db.Sequelize.Op;

// Insert new role
exports.create = (req, res) => {
    if (!req.body.role_name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a role
  const role = {
    role_name: req.body.role_name,
  };

  // Save role in the database
  Role.create(role)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Role."
      });
    });
};

// Retrieve all roles
exports.findAll = (req, res) => {

  const roleName = req.query.role_name;
  const condition = roleName ? { role_name: { [Op.like]: `%${roleName}%` } } : null;

  Role.findAll({ where: condition })
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

// search a single role with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Role.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Role with id=" + id
      });
    });
};

// Update a role details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Role.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Role."
        });
      } else {
        res.send({
          message: `Can't update role with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Role with id=" + id
      });
    });
};

// remove a role with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Role.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted role!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Role with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Role.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving role."
      });
    });
};