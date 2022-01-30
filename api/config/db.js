const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "alternatecms",
  password: "Libra1986",
  port: 5432,
  host: "localhost",
  connectionLimit: 10
});

module.exports = { pool };