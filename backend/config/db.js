const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shopping_cart_db",
  password: "admin123",
  port: 5433,
});

module.exports = { pool };
