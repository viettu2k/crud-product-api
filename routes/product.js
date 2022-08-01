const express = require("express");
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listBySearch,
  photo,
  listSearch,
} = require("../controllers/product");

router.get("/product/:productId", read);
router.post("/product/create/", create);
router.delete("/product/:productId", remove);
router.put(
  "/product/:productId",

  update
);

router.get("/products", list);
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("productId", productById);

module.exports = router;
