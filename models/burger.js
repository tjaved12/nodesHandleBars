// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
      orm.create("burger", cols,vals,function(res) {
  cb(res);
    });
  },

  update: function(condition, cb) {
    orm.update("burger",condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;