const errorHandler = (err, req, res, next) => {
  // console.log("error",err);
  // console.log("response",res);
  // console.log("response",res.statusCode);
  // console.log("response",res.statusMessage);
  // console.error("Error occurred:", err.stack);
  let statusCode = err.status || 500;
  let message = err.message;
  console.error("Error:", err.message);
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    message = `User already found.`;
    statusCode = 400; // Bad request status
  }
  res
    .status(statusCode)
    .json({
      error: message,
      status: statusCode,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
module.exports = {
  errorHandler,
};
