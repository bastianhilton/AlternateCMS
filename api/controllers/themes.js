/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Theme = db.themes;
const Op = db.Sequelize.Op;

// Insert new theme
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a theme
  const theme = {
    title: req.body.title,
    parent_theme: req.body.parent_theme,
    theme_path:req.body.theme_path,
    action:req.body.action
  };

  // Save theme in the database
  Theme.create(theme)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Theme."
      });
    });
};

// Retrieve all themes
exports.findAll = (req, res) => {

  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Theme.findAll({ where: condition })
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

// search a single theme with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Theme.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Theme with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Theme with id=" + id
      });
    });
};

// Update a theme details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Theme.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Theme."
        });
      } else {
        res.send({
          message: `Can't update theme with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Theme with id=" + id
      });
    });
};

// remove a theme with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Theme.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted theme!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Theme with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Theme with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Theme.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving themes."
      });
    });
};