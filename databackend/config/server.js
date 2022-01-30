module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1437),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4b88fcc49345133ad2cd01ffc489aff4'),
    },
  },
});
