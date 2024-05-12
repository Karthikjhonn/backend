const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    CourseName: { type: String, required: true },
    CourseCode: { type: String || Number, required: true },
    Instructor: { type: Array },
    Syllabus:{type:Array},
    Fees: { type: String || Number, required: true },
  },
  { timestamps: true }
);

const course = mongoose.model("courses", courseSchema);

module.exports = course;
