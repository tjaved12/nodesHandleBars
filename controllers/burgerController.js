var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger= require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//Get Route
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("all-favourite", hbsObject);
  });
});
//Posting to DB
router.post("/burger", function(req, res) {
  burger.create(["burger_name"],[req.body.task],
    function (result) {
            res.redirect("/");
    });
});

//Updating the DB
router.put("/burger/save/:id", function(req, res) {
 
  var condition = "id = " + req.params.id;

 //console.log("condition", burger);

  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
 
// Export routes for server.js to use.
module.exports = router;
