const express = require('express')
const router = express.Router();
const {getStudent,createStudent,updateStudent,deleteStudent, getStudentTeacher}=require('../controller/studentController')
// router.get('/',getStudent)
// router.post('/',createStudent)
// router.put('/:id',updateStudent)
// router.delete('/:id',deleteStudent)
router.route('/student').get(getStudent).post(createStudent);
router.route('/student/:id').put(updateStudent).delete(deleteStudent).get(getStudentTeacher);
module.exports = router