const fastify = require('fastify')();

fastify.register(require('fastify-nuxtjs')).after(() => {
  fastify.nuxt('../pages/index');
});

fastify.listen(8000, (err) => {
  if (err) throw err;
  console.log('Server listening on http://localhost:8000');
});