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

router.post("/add-product", addProduct);
router.get("/:productId", read);
router.delete("/:productId", remove);
router.put("/:productId", update);

router.get("/get-products", list);
router.get("/products/search", listSearch);
router.get("/photo/:productId", photo);
router.post("/products/by/search", listBySearch);

router.param("productId", productById);

module.exports = router;
