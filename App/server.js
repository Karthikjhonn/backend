const { urlencoded } = require("body-parser");
const express = require("express");
const path = require('path')
const dotenv = require("dotenv").config();
const k1Routes = require("./Routes/routes");
const connectDb = require("../App/database/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname,'index.html')
  res.sendFile(filePath);
});

// app.use("/api/k1/", require("../App/Routes/studentRoute"));
// app.use("/api/k1/", require("../App/Routes/userRoute"));
app.use("/api/k1/", k1Routes);
app.use(errorHandler);
const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
