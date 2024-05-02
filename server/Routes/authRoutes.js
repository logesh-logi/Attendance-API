const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.registerAdmin);
router.post("/login", authController.signAdmin);

module.exports = router;
