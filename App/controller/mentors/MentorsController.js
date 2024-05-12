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
module.exports = { getAllMentor, createMentor };
