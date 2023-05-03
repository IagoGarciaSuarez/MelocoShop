const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("/products");
});

module.exports = router;
