// Attendance model basically will have Date, emp_id and status indicating whether the employee is present or absent on the paricular date.

const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Emp = require("./Employee");

const Attendance = sequelize.define("Attendance", {
  status: {
    type: DataTypes.STRING,
    allownull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allownull: false,
  },
  EmpId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: Emp,
      key: "empId",
    },
  },
});

module.exports = Attendance;
