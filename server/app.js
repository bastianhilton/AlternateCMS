/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fastify = require('fastify')({ logger: true })

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  app.use(cors());
 
// parse incoming request body
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.listen(process.env.PORT || 8081);

  // eslint-disable-next-line require-await
  fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })
    
  const start = async () => {
      try {
        await fastify.listen(3000)
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    }
    start() 
}
