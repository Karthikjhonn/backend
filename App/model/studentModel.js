const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Qualification: { type: String || Number },
    Experience: { type: String || Number },
    DOB: { type: String || Number, required: true },
    MobileNo: { type: String || Number, required: true },
    Address: { type: String, required: true },
    Branch: { type: String, required: true },
    CourseName: { type: Array, required: true },
    CourseCode: { type: Array || Number },
    ClassType: { type: String, required: true },
    Payment: { type: String },
    Status: { type: String },
    Message: { type: String },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;

// - Personal Details
//   Name,
//   Email,
//   Highest Qualification,
//   Experience,
//   DOB,
//   Mobile No,
//   Address,
//   Registration Date

// - Course Related Details
//   Branch,
//   Course Name,
//   Course Code,
//   Class Type (Week day's/Week end),
//   Payment,
//   status,
//   Message (optional)
