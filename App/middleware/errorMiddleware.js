const errorHandler = (err, req, res, next) => {
  console.log(res);
  const statusCode = res.statusCode || 500;

res.status(statusCode);
res.json({
    message:err.message
})
};
 module.exports ={
    errorHandler
 }