const { urlencoded } = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();

const connectDb = require("../App/database/db");


connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/k1/student", require("../App/Routes/studentRoute"));
app.post("/api/k1/student", require("../App/Routes/studentRoute"));
app.put("/api/k1/student", require("../App/Routes/studentRoute"));
app.delete("/api/k1/student", require("../App/Routes/studentRoute"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
