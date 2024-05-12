const express = require("express");
const {
  getAllMentor,
  createMentor,
} = require("../../controller/mentors/MentorsController");
const router = express.Router();

router.route("/").get(getAllMentor).post(createMentor);
// router.route("/update").put(updateStudent);
// router.route("/delete").delete(deleteStudent);
// router.route("/id").get(getStudentTeacher);

module.exports = router;
