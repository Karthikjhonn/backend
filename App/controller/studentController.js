const student = require("../model/studentModel");

const getStudent = async (req, res) => {
  try {
    const allStudent = await student.find();
    res.status(200).json(allStudent);
  } catch (err) {
    res.status(400);
    throw new Error("client side error");
  }
};
const createStudent = async (req, res) => {
  try {
    if (!req.body.name || !req.body.class) {
      return res.status(400).json({ msg: "All field are required" });
    }
    const createStudent = await student.create(req.body);
    res
      .status(200)
      .json({ message: "New student created successfully", createStudent });
  } catch (err) {
    res.status(400);
    throw new Error("client error");
  }
};
const updateStudent = async (req, res) => {
  try {
    const findStudent = await student.findById(req.params.id);
    if (!findStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty body not allowed" });
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
  } catch (error) {
    console.error("Error", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      id: req.params.id,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the student" });
  }
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
