const mongoose = require("mongoose");
const validator = require("validator");

const mentorSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email address"],
    },
    age: { type: Number || String, required: [true, "Age is required"] },
    mobile: { type: Number, required: [true] },
    qualification: { type: String || Number, required: true },
    experience: { type: String || Number, required: true },
    specialization: { type: String, required: true },
    courseCode: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
    ],
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const mentors = mongoose.model("mentors", mentorSchema);

module.exports = { mentors };
