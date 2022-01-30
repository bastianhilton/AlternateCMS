/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable node/handle-callback-err */
const db = require("../models");
const UrlRewrite = db.urlrewrites;
const Op = db.Sequelize.Op;

// Insert new urlrewrite
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a urlrewrite
  const urlrewrite = {
    request_path: req.body.request_path,
    description: req.body.description,
    redirect_type:req.body.redirect_type,
    target_path:req.body.target_path,
    store:req.body.store
  };

  // Save urlrewrite in the database
  UrlRewrite.create(urlrewrite)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the UrlRewrite."
      });
    });
};

// Retrieve all urlrewrites
exports.findAll = (req, res) => {

  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  UrlRewrite.findAll({ where: condition })
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

// search a single urlrewrite with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UrlRewrite.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find UrlRewrite with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UrlRewrite with id=" + id
      });
    });
};

// Update a urlrewrite details by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  UrlRewrite.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully Updated UrlRewrite."
        });
      } else {
        res.send({
          message: `Can't update urlrewrite with id=${id}.Something has gone wrong!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't update UrlRewrite with id=" + id
      });
    });
};

// remove a urlrewrite with the given id 
exports.delete = (req, res) => {
  const id = req.params.id;

  UrlRewrite.destroy({
    where: { id }
  })
    .then(num => {
      if (num = 1) {
        res.send({
          message: "Successfully deleted urlrewrite!"
        });
      } else {
        res.send({
          message: `Something went wrong!Can't delete UrlRewrite with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Can't delete UrlRewrite with id=" + id
      });
    });
};

exports.findAllPublished = (req, res) => {
  UrlRewrite.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving urlrewrites."
      });
    });
};