const express = require("express");
const {
  getAllMentor,
  createMentor,
  updateMentor,
  deleteMentor,
} = require("../../controller/mentors/MentorsController");
const router = express.Router();

router.route("/").get(getAllMentor).post(createMentor);
router.patch('/update',updateMentor)
router.delete('/delete',deleteMentor)
// router.route("/update").put(updateStudent);
// router.route("/delete").delete(deleteStudent);
// router.route("/id").get(getStudentTeacher);

module.exports = router;
