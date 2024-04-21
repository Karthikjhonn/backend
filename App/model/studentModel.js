const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    class: { type: String || Number, required: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
