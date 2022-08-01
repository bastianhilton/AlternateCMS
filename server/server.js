const express = require('express');
const { getDB } = require('./context/db');
const schema = require('.');
const context = require('./context');
const server = require('./index');
const rest = require('./rest');

(async () => {
  const port = process.env.PORT || 4001;
  const app = express();
  const db = await getDB();

  const config = {
    schema,
    context: { ...context, db }
  };

  server(app, config);
  rest(app, config);

  app.listen({ port }, () => {
    console.log(`🚀  Server ready http://localhost:${port}`);
  });
})();
