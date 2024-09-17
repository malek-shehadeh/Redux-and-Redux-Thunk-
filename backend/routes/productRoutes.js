const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { authenticateToken } = require("../middleware/auth");

router.get("/", productController.getAllProducts);
router.post("/", authenticateToken, productController.addProduct);
router.put("/:id", authenticateToken, productController.updateProduct);
router.delete("/:id", authenticateToken, productController.deleteProduct);

module.exports = router;
