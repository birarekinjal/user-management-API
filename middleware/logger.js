function log(req, res, next) {
    console.log("login");
    next();
  }
function authentication(req, res, next) {
    console.log("autotication");
    next();
  }

  module.exports = { log, authentication };
  