// const {mongoose } = require("mongoose");

// const studentSchema = mongoose.schema({
//     name: { type: String, required: true },
//     class: { type: String, required: true },
//   }, { timestamps: true });

// module.exports = mongoose.module('student',studentSchema)
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String || Number, required: true },
}, { timestamps: true });

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
