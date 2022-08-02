const express = require("express");
const router = express.Router();

const {
  addProduct,
  productById,
  read,
  remove,
  update,
  list,
  listBySearch,
  photo,
  listSearch,
} = require("../controllers/product");

// Add product
router.post("/add-product", addProduct);
// Get products
router.get("/get-products", list);
// Get product photo
router.get("/photo/:productId", photo);
// Get product by id
router.get("/get-product/:productId", read);
// Delete product by id
router.delete("/delete/:productId", remove);
router.put("/:productId", update);
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);

router.param("productId", productById);

module.exports = router;
