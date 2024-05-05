const express = require("express");
const router = express.Router();
const userRoute = require("./userRoutes/userRoute");
const studentRoute = require("./studentsRoute/studentRoute");
const courseRoute = require("./course/courseRoute");

router.use("/", userRoute);
router.use("/student", studentRoute);
router.use("/course", courseRoute);

module.exports = router;
