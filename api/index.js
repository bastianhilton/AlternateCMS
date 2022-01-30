const path = require('path');
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const db = require('./config/db');

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Require & Import API routes

app.use(express.static(path.join(__dirname, '../static/assets/')));

// Index route
app.get('../pages/', (req, res) => res.render('index', { layout: 'default' }));

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));