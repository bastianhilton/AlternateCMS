const fastify = require('fastify')({
    // Required: Enable TLS
    https: true,
    // Optional: Enable HTTP/2
    http2: true
  })
  
  fastify.register(require('fastify-tls-keygen'), {
    // Optional (default: ./key.pem)
    key: '~/keygen/keys/private/key.pem',
    // Optional (default: ./cert.pem)
    cert: '~/keygen/certifications/certificate.pem'
  })
  
  // Tip: Port 443 (HTTPS) requires root permissions. Use a port >1024.
  fastify.listen(8443)
  