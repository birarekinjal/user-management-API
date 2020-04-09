function log(req, res, next) {
    console.log("login");
    next();
  }
function authentication(req, res, next) {
    console.log("Authentication");
    next();
  }

  module.exports = { log, authentication };
  