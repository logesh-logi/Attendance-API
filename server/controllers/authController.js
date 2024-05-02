const admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

// route for Admin signup
exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking all credentials are available
    if (email == null || password == null) {
      return res.status(400).json({ msg: "Missing Credentials" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Email is not vaild" });
    }

    //checking if admin already exist with give email
    const userExists = await admin.findOne({
      where: {
        email,
      },
    });

    if (userExists != null) {
      return res.status(400).json({ msg: "Email id Already Exists" });
    }

    //creating admin
    await admin.create({
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.status(200).json({ msg: "Admin Registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error in Registering Admin" });
  }
};

// route for handling login of Admin
exports.signAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking all credentials are available
    if (email == null || password == null) {
      return res.status(400).json({ msg: "Missing Crendentials" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Email is not vaild" });
    }

    //checking whether the user registered
    const user = await admin.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: "Email id Does not exists" });
    }

    // checking password
    const passwordVaild = await bcrypt.compare(password, user.password);
    if (!passwordVaild) {
      return res
        .status(404)
        .json({ msg: "Invaild Email and password Combination" });
    }

    // generating jwt token and sending it to the user
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    res.status(200).json({
      id: user.id,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json({ msg: "Error in login of Admin" });
  }
};
