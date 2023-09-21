// config/ensureLoggedIn.js
// For use within any router module with routes that need to ensure that there's a logged in user.


module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
  };
  