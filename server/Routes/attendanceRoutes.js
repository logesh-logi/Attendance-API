const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.get("/:id", attendanceController.getEmployeeAttendance);
router.post("/", attendanceController.addAttendance);
router.get("/", attendanceController.listAllAttendence);
router.put("/edit", attendanceController.updateAttendance);
router.delete("/", attendanceController.deleteAttendance);

module.exports = router;
