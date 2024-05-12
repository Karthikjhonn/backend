const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/AuthenticationMiddleware");
const {
  GetAllCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
} = require("../../controller/courses/courseController");
router.get("/allcourse", GetAllCourse);
router.post("/createcourse", CreateCourse);
router.patch("/update", UpdateCourse);
router.delete("/delete", DeleteCourse);

module.exports = router;
