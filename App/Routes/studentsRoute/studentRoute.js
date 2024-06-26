const express = require("express");
const router = express.Router();
const {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentTeacher,
} = require("../../controller/students/studentController");
const authenticate = require("../../middleware/AuthenticationMiddleware");
// router.get('/',getStudent)
// router.post('/',createStudent)
// router.put('/:id',updateStudent)
// router.delete('/:id',deleteStudent)
router.route("/").get(getStudent).post(createStudent);
router.route("/update").put(updateStudent);
router.route("/delete").delete(deleteStudent);
router.route("/id").get(getStudentTeacher);

module.exports = router;
