const express = require("express");
const router = express.Router();
const userRoute = require("./userRoutes/userRoute");
const studentRoute = require("./studentsRoute/studentRoute");
const courseRoute = require("./course/courseRoute");
const MentorRoutes = require("./mentors/MentorRoutes");

router.use("/", userRoute);
router.use("/student", studentRoute);
router.use("/course", courseRoute);
router.use("/mentors", MentorRoutes);

module.exports = router;
