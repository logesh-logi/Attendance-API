const express = require("express");
const router = express.Router();
const empRoutes = require("../Routes/empRoutes");
const attendanceRoutes = require("../Routes/attendanceRoutes");
const authRoutes = require("../Routes/authRoutes");

router.use("/auth", authRoutes);

router.use("/emp", empRoutes);
router.use("/attendance", attendanceRoutes);

module.exports = router;
