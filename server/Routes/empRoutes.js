const express = require("express");
const router = express.Router();
const empController = require("../controllers/empController");

router.get("/", empController.listAllEmployees);
router.post("/", empController.addEmployee);
router.put("/edit", empController.updateEmployee);
router.delete("/", empController.deleteEmployee);

module.exports = router;
