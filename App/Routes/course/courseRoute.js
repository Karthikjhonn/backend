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
router.patch("/byid/:id", UpdateCourse);
router.delete("/byid/:id", DeleteCourse);

module.exports = router;
