/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Insert new user
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a user
  const user = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    password:req.body.password,
    interface_locale:req.body.interface_locale,
    active:req.body.active,
    expiration_date:req.body.expiration_date,
    type_of_user:req.body.type_of_user
  };

  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the User."
      });
    });
};

// Retrieve all users
exports.findAll = (req, res) => {

  const username = req.query.username;
  const condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  User.findAll({ where: condition })
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

// search a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a user details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated User."
        });
      } else {
        res.send({
          message: `Can't update user with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update User with id=" + id
      });
    });
};

// remove a user with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted user!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete User with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};