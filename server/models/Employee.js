const { types } = require("pg");
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("Employee", {
  empName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  empEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
