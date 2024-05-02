const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");
const validator = require("validator");

// route for getting all employee details
exports.listAllEmployees = async (req, res) => {
  const record = await Employee.findAll({
    attributes: ["empName", "empId", "empEmail"],
  });
  return res.status(200).json(record);
};

// route for adding new Employee record
exports.addEmployee = async (req, res) => {
  try {
    const { id, name, email } = req.body;

    //checking all credentials are available
    if (id == null || name == null || email == null) {
      return res.status(400).json({ msg: "Missing Crendentials" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Email is not vaild" });
    }

    //checking whether the employee already exists
    const employeeExists = await Employee.findOne({
      where: {
        empId: id,
      },
    });

    if (employeeExists != null) {
      return res
        .status(400)
        .json({ msg: "Employee with this Id already Exists" });
    }

    //creating employee record
    await Employee.create({
      empId: id,
      empName: name,
      empEmail: email,
    });

    res.status(200).json({
      msg: "Employee created successfully",
      data: {
        empId: id,
        empName: name,
        empEmail: email,
      },
    });
  } catch (error) {
    console.error("Error in creating Employee: ", error);
    res.status(500).json({
      msg: "Error creating Employee",
    });
  }
};

// route for updating Employee Details
exports.updateEmployee = async (req, res) => {
  const { id, name, email } = req.body;

  //checking all credentials are available
  if (id == null || name == null || email == null) {
    return res.status(400).json({ msg: "Missing Crendentials" });
  }

  //validating email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Email is not vaild" });
  }

  //checking whether the employee already exists
  const employeeExists = await Employee.findOne({
    where: {
      empId: id,
    },
  });

  if (employeeExists == null) {
    return res
      .status(400)
      .json({ msg: "Employee with given Id does not exists" });
  }

  // updating employee record
  await Employee.update(
    { empEmail: email, empName: name },
    {
      where: {
        empId: id,
      },
    }
  );

  const updatedRecord = await Employee.findOne({
    attributes: ["empId", "empName", "empEmail"],
    where: {
      empId: id,
    },
  });

  return res
    .status(200)
    .json({ msg: "Employee details updated successfully", updatedRecord });
};

//route for deleting particular employee with ID
exports.deleteEmployee = async (req, res) => {
  const id = req.query.id;

  //checking all credentials are available
  if (id == null) {
    return res.status(400).json({ msg: "Missing Crendentials" });
  }
  const employeeExists = await Employee.findOne({
    where: {
      empId: id,
    },
  });

  if (employeeExists == null) {
    return res
      .status(400)
      .json({ msg: "Employee with this Id does not Exists" });
  }

  //Employee id is Foreign key so delete records of Attendance first
  await Attendance.destroy({
    where: {
      EmpId: id,
    },
  });

  await Employee.destroy({
    where: {
      empId: id,
    },
  });

  res
    .status(200)
    .json({ msg: `Employee with id: ${id} is deleted Successfully` });
};
