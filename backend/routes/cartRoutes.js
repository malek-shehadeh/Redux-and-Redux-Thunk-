const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { authenticateToken } = require("../middleware/auth");

router.get("/", authenticateToken, cartController.getCart);
router.post("/add", authenticateToken, cartController.addToCart);
router.delete("/:productId", authenticateToken, cartController.removeFromCart);

module.exports = router;
