const student = require("../model/studentModel");

const getStudent = async (req, res, next) => {
  try {
    const allStudent = await student.find();
    res.status(200).json(allStudent);
  } catch (err) {
    res.status(400);
    throw new Error("client side error");
  }
};
const getStudentTeacher = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const userId=req.params.id
    if(!userId){
      throw new Error("user id required")
    }
    const allStudent = await student.find({userId:userId});
    res.status(200).json(allStudent);
  } catch (err) {
    next(err)
  }
};
const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { userId, name, class: classLevel } = req.body;
  try {
    if (!userId || !classLevel || !name) {
      const error = new Error("All fields are required");
      error.status = 404;
      throw error;
    }
    const createStudent = await student.create({
      name,
      class: classLevel,
      userId: userId,
    });
    res
      .status(200)
      .json({ message: "New student created successfully", createStudent });
  } catch (err) {
    next(err);
    
  }
};
const updateStudent = async (req, res, next) => {
  try {
    const findStudent = await student.findById(req.params.id);
    if (!findStudent) {
      const error = new Error("Student not found");
      error.status = 404;
      throw error;
    }
    if (Object.keys(req.body).length === 0) {
      const error = new Error("Empty body not allowed for update");
      error.status = 404;
      throw error;
    }

    const updateStudent = await student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Student updated successfully",
      student: updateStudent,
    });
  } catch (err) {
    // res
    //   .status(400)
    //   .json({ error: "An error occurred while updating the student" });
    const error = new Error("Student not found");
    error.status = 404;
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      // return res.status(404).json({ message: "Student not found" });
      const error = new Error("Student not found");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      message: "Student deleted successfully",
      id: req.params.id,
    });
  } catch (err) {
    const error = new Error("An error occurred while deleting the student");
    error.status = 404;
    next(error);
  }
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentTeacher
};
