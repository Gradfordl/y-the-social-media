// config/checkToken.js
//This is the backend getting the token from the client
const jwt = require('jsonwebtoken');


//this is our middleware function
//middleware runs between request and response
module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  //checking Authorization header or request query for a token
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      
    // req.user = err ? null : decoded.user;  
      if (err) {
        req.user = null
      } else {
        req.user = decoded.user
      }
      // console.log(req.user)
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};