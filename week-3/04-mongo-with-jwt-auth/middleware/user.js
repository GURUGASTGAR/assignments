const jwt = require("jsonwebtoken");
const secret = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodeVal = jwt.verify(jwtToken, secret);
  console.log(decodeVal.username);
  if (decodeVal.username) {
    req.username = decodeVal.username;
    next();
  } else {
    res.status(403).json({
      msg: "auth failed",
    });
  }
}

module.exports = userMiddleware;
