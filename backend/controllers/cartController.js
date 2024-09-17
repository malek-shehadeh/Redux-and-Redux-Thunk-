const { pool } = require("../config/db");

exports.getCart = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT c.id, c.user_id, c.product_id, c.quantity, p.name, p.price, p.image FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = $1",
      [req.user.userId]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart" });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  try {
    const existingItem = await pool.query(
      "SELECT * FROM cart WHERE user_id = $1 AND product_id = $2",
      [req.user.userId, productId]
    );

    if (existingItem.rows.length > 0) {
      const result = await pool.query(
        "UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3 RETURNING *",
        [quantity, req.user.userId, productId]
      );
      res.json(result.rows[0]);
    } else {
      const result = await pool.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
        [req.user.userId, productId, quantity]
      );
      res.json(result.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM cart WHERE user_id = $1 AND product_id = $2 RETURNING *",
      [req.user.userId, productId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Error removing item from cart" });
  }
};
