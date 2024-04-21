const userModel = require("../model/UsersModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "User Profile created successfully", user });
  } catch (err) {
    next(err);
  }
};
const loginUser = async (req, res, next) => {
  const JWT_SECRET =process.env.JWT_SECRET;
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Email is required for login");
    }
    const getUserDetails = await userModel.findOne({ email });
    if (!getUserDetails) {
      const error = new Error("user not found");
      error.status = 404;
      throw error;
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      getUserDetails.password
    );
    if (!isPasswordValid) {
      throw new Error("Enter valid password");
    }
    const token = jwt.sign(
      { userId: getUserDetails._id, email: getUserDetails.email },
      JWT_SECRET,
      { expiresIn: '30d' } 
    );
    res
      .status(200)
      .json({ message: "user log in successfully", user: getUserDetails ,token:token});
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createUser,
  loginUser,
};
