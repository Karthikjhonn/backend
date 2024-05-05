const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Middleware to validate JWT
const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ msg: "Authorization denied" });
      }

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ msg: "No token, Unauthorized " }); // Unauthorized
  }
};

module.exports = isAuth;
