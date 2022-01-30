/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const Page = db.pages;
const Op = db.Sequelize.Op;

// Insert new page
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a page
  const page = {
    enable_page: req.body.enable_page,
    title: req.body.title,
    content_title: req.body.content_title,
    content: req.body.content,
    url_key: req.body.url_key,
    meta_title: req.body.meta_title,
    meta_keywords: req.body.meta_keywords,
    meta_description: req.body.meta_description
  };

  // Save page in the database
  Page.create(page)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Page."
      });
    });
};

// Retrieve all pages
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Page.findAll({ where: condition })
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

// search a single page with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Page.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Page with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Page with id=" + id
      });
    });
};

// Update a page details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Page.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated Page."
        });
      } else {
        res.send({
          message: `Can't update page with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update Page with id=" + id
      });
    });
};

// remove a page with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Page.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted page!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete Page with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete Page with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  Page.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pages."
      });
    });
};