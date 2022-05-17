'use strict'

const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-mailer'), {
  defaults: { from: 'John Doe <john.doe@example.tld>' },
  transport: {
    host: 'smtp.example.tld',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'john.doe',
      pass: 'super strong password'
    }
  }
})

fastify.get('/send', (request, reply) => {
  const { mailer } = fastify

  mailer.sendMail({
    to: 'someone@example.tld',
    subject: 'example',
    text: 'hello world !'
  }, (errors, info) => {
    if (errors) {
      fastify.log.error(errors)

      reply.status(500)
      return {
        status: 'error',
        message: 'Something went wrong'
      }
    }

    reply.status(200)
    return {
      status: 'ok',
      message: 'Email successfully sent',
      info: {
        from: info.from, // John Doe <john.doe@example.tld>
        to: info.to, // ['someone@example.tld']
      }
    }
  })
})

fastify.listen(3000, (errors) => {
  if (errors) {
    fastify.log.error(errors)
    process.exit(1)
  }
})