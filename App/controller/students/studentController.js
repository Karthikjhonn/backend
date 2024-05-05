const messages = require("../../messages/messages");
const student = require("../../model/studentModel");

const getStudent = async (req, res, next) => {
  try {
    const allStudent = await student.find();
    res.status(200).json(allStudent);
  } catch (err) {
    res.status(400);
    throw new Error(messages.clientSideError.clientError);
  }
};
const getStudentTeacher = async (req, res, next) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ message: messages.studentsMessage.userId });
    }

    const allStudent = await student.find({ userId: userId });

    if (allStudent.length === 0) {
      return res.status(404).json({ message: messages.studentsMessage.snf });
    }

    res.status(200).json(allStudent);
  } catch (err) {
    next(err);
  }
};

const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { userId, name, class: classLevel } = req.body;
  try {
    if (Object.keys(req.body).length === 0) {
      const error = new Error(messages.requestBody.emptyBody);
      error.status = 400;
      return next(error);
    }

    const createStudent = await student.create(req.body);
    res
      .status(200)
      .json({ message: messages.studentsMessage.createStudent, createStudent });
  } catch (err) {
    next(err);
  }
};
const updateStudent = async (req, res, next) => {
  try {
    const findStudent = await student.findById(req.params.id);
    if (!findStudent) {
      const error = new Error(messages.studentsMessage.snf);
      error.status = 404;
      throw error;
    }
    if (Object.keys(req.body).length === 0) {
      const error = new Error(messages.requestBody.updateEmptyBody);
      error.status = 404;
      throw error;
    }

    const updateStudent = await student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: messages.studentsMessage.updateStudent,
      student: updateStudent,
    });
  } catch (err) {
    // res
    //   .status(400)
    //   .json({ error: "An error occurred while updating the student" });
    const error = new Error(messages.studentsMessage.snf);
    error.status = 404;
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      // return res.status(404).json({ message: "Student not found" });
      const error = new Error(messages.studentsMessage.snf);
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      message: messages.studentsMessage.deleteStudent,
      id: req.params.id,
    });
  } catch (err) {
    const error = new Error(messages.studentsMessage.deleteStudentError);
    error.status = 404;
    next(error);
  }
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentTeacher,
};