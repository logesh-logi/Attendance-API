const express = require("express");
const router = express.Router();
const empRoutes = require("../Routes/empRoutes");
const attendanceRoutes = require("../Routes/attendanceRoutes");

router.use("/emp", empRoutes);
router.use("/attendance", attendanceRoutes);

module.exports = router;
