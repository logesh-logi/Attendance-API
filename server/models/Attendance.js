// Attendance model basically will have Date, emp_id and status indicating whether the employee is present or absent on the paricular date.

const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Emp = require("./Employee");

const Attendance = sequelize.define("Attendance", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  EmpId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Emp,
      key: "empId",
    },
  },
});

module.exports = Attendance;
