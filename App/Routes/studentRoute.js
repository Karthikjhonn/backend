const express = require('express')
const router = express.Router();
const {getStudent,createStudent,updateStudent,deleteStudent}=require('../controller/studentController')
// router.get('/',getStudent)
// router.post('/',createStudent)
// router.put('/:id',updateStudent)
// router.delete('/:id',deleteStudent)
router.route('/').get(getStudent).post(createStudent);
router.route('/:id').put(updateStudent).delete(deleteStudent);
module.exports = router