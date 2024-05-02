const Attendance = require("../models/Attendance");
const Emp = require("../models/Employee");

// route for adding new attendance record
exports.addAttendance = async (req, res) => {
  try {
    const { date, id, status } = req.body;
    const emp = await Emp.findOne({
      where: {
        empId: id,
      },
    });

    // Checking whether there is User with given employee ID.
    if (emp == null) {
      return res
        .status(400)
        .json({ msg: "There is no User with given EmpId..." });
    }

    //Checking if Record for particular date already exists
    const AttendanceRecord = await Attendance.findOne({
      where: {
        date,
      },
    });

    if (AttendanceRecord != null) {
      return res
        .status(400)
        .json({ msg: "Record for particular date already exists" });
    }

    // Checking for Vaild Date
    if (
      id == undefined ||
      date == undefined ||
      status == undefined ||
      new Date(date) > new Date()
    ) {
      return res.status(400).json({ msg: "Invalid Information" });
    }

    const record = await Attendance.create({
      date: new Date(date),
      status,
      EmpId: id,
    });

    return res.status(200).json({
      msg: "Attendance added successfully",
      data: {
        EmpId: record.EmpId,
        date: record.date,
        status: record.status,
      },
    });
  } catch (error) {
    console.error("Error adding attendance: ", error);
    return res.status(500).json({ msg: "Error adding attendance" });
  }
};

// Route for displaying all Attendance records
exports.listAllAttendence = async (req, res) => {
  try {
    const record = await Attendance.findAll({
      attributes: ["EmpId", "date", "status"],
    });
    return res.status(200).json({ data: record });
  } catch (err) {
    console.error("Error getting Attendence Info");
    return res.status(500).json({ msg: "Error getting attendance Info" });
  }
};

// Route for updating particular Attendance record
exports.updateAttendance = async (req, res) => {
  try {
    const { id, status, date } = req.body;
    const record = Attendance.findOne({
      where: {
        EmpId: id,
        date,
      },
    });

    if (record == null) {
      return res.status(400).json({ msg: "Invaild Information provided" });
    }

    await Attendance.update(
      { status },
      {
        where: {
          date,
          EmpId: id,
        },
      }
    );

    return res.status(200).json({
      msg: "Attendance Updated Successfully",
    });
  } catch (error) {
    console.error("Error in updating the Attendance");
    return res.status(500).json({
      msg: "Error in updating the Attendance",
    });
  }
};

// Route for deleting particular record in Attendance
exports.deleteAttendance = async (req, res) => {
  const { date, id } = req.query;
  const record = await Attendance.findOne({
    where: {
      date,
      EmpId: id,
    },
  });

  if (record == null) {
    return res.status(400).json({ msg: "Invalid information" });
  }
  await Attendance.destroy({
    where: {
      date,
      EmpId: id,
    },
  });

  return res
    .status(200)
    .json({ msg: " Attendance record Deleted Successfully" });
};

// route for getting Attendance Detail of particular employee
exports.getEmployeeAttendance = async (req, res) => {
  const id = req.params.id;
  const empRecord = await Emp.findOne({
    where: {
      empId: id,
    },
  });

  if (empRecord == null) {
    return res.status(400).json({ msg: "Invalid information" });
  }

  const AttendanceRecord = await Attendance.findAll({
    attributes: ["date", "status"],
    where: {
      EmpId: id,
    },
  });

  return res
    .status(200)
    .json({ Name: empRecord.empName, EmpId: id, AttendanceRecord });
};
