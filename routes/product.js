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

router.get("/:productId", read);
router.post("/add", addProduct);
router.delete("/:productId", remove);
router.put("/:productId", update);

router.get("/products", list);
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);
router.get("/photo/:productId", photo);

router.param("productId", productById);

module.exports = router;
