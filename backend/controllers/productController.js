const { pool } = require("../config/db");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

exports.addProduct = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  const { name, description, price, image } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error adding product" });
  }
};

exports.updateProduct = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  const { id } = req.params;
  const { name, description, price, image } = req.body;
  try {
    const result = await pool.query(
      "UPDATE products SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5 RETURNING *",
      [name, description, price, image, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
};

exports.deleteProduct = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
