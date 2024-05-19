const messages = require("../../messages/messages");
const { mentors } = require("../../model/MentorModel");

const getAllMentor = async (req, res, next) => {
  try {
    const allMentors = await mentors.find();
    const aggregateData = await mentors.aggregate([
      {
        $lookup: {
          from: "courses",
          localField: "courseCode",
          foreignField: "_id",
          as: "takenCourse",
        },
      },
    ]);
    console.log("aggregateData", aggregateData);

    res.status(200).json(aggregateData);
  } catch (err) {
    // throw new Error("something went wrong");
    res.status(400).json({ error: err.message });
  }
};
const createMentor = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      const error = new Error(messages.requestBody.emptyBody);
      error.status = 400;
      return next(error);
    }

    const mentor = await mentors.create(req.body);
    res.status(200).json({ message: "mentor successfully register", mentor });
  } catch (err) {
    next(err);
  }
};
const updateMentor = async (req, res, next) => {
  const { Id } = req.body;

  try {
    if (Id == "" || Id == undefined || Id == null) {
      const error = new Error("Mentor not found");
      error.status = 400;
      next(error);
    }
    if (Object.keys(req.body).length === 0) {
      const error = new Error("Request body empty");
      error.status = 400;
      next(error);
    }
    const mentor = await mentors.findByIdAndUpdate(Id, req.body, { new: true });
    if(!mentor){
      throw new Error("Mentor not found.");
    }
    res.status(200).json({ message: "Updated successfully", mentor: mentor });
  } catch (error) {
    next(error);
  }
};
const deleteMentor = async (req, res, next) => {
  const { Id } = req.body;
  try {
    if (Id == "" || Id == undefined || Id == null) {
      throw new Error("Mentor not found");
    }
    const deletedMentor = await mentors.findByIdAndDelete(Id);
    res
      .status(200)
      .json({ message: "deleted successfully", mentor: deletedMentor });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllMentor, createMentor, updateMentor, deleteMentor };
