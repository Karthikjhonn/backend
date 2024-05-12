const messages = require("../../messages/messages");
const courseSchema = require("../../model/courseModel");

const GetAllCourse = async (req, res, next) => {
  try {
    const allCourse = await courseSchema.find();
    res.status(200).json(allCourse);
  } catch (err) {
    res.status(400);
    throw new Error(messages.clientSideError.clientError);
  }
};
const CreateCourse = async (req, res, next) => {
  console.log(req.body);
  const { CourseCode } = req.body;
  try {
    if (Object.keys(req.body).length === 0) {
      const error = new Error(messages.requestBody.emptyBody);
      error.status = 400;
      return next(error);
    }
    console.log(CourseCode);
    const existingCourse = await courseSchema.findOne({ CourseCode });
    console.log(existingCourse);
    if (existingCourse) {
      const error = new Error(messages.courseMessage.courseExist);
      error.status = 400;
      throw error;
    }
    const createdCourse = await courseSchema.create(req.body);
    res
      .status(200)
      .json({ message: messages.courseMessage.create, createdCourse });
  } catch (err) {
    next(err);
  }
};
const UpdateCourse = async (req, res, next) => {
  const Id = req.query.id;
  try {
    const findCourse = await courseSchema.findById(Id);
    if (!findCourse) {
      const error = new Error(messages.courseMessage.cnf);
      error.status = 404;
      throw error;
    }
    if (Object.keys(req.body).length === 0) {
      const error = new Error(messages.requestBody.updateEmptyBody);
      error.status = 404;
      throw error;
    }

    const updatedCourse = await courseSchema.findByIdAndUpdate(Id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: messages.courseMessage.update,
      course: updatedCourse,
    });
  } catch (err) {
    const error = new Error("course not found");
    error.status = 404;
    next(error);
  }
};
const DeleteCourse = async (req, res, next) => {
  const Id = req.query.id;
  try {
    const deletedCourse = await courseSchema.findByIdAndDelete(Id);

    if (!deletedCourse) {
      const error = new Error(messages.courseMessage.cnf);
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      message: messages.courseMessage.delete,
      id: Id,
    });
  } catch (err) {
    const error = new Error(messages.courseMessage.deleteCourseError);
    error.status = 404;
    next(error);
  }
};

module.exports = {
  GetAllCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
};
