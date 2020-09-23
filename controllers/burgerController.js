var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger= require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("all-favourite", hbsObject);
  });
});

router.post("/burger/save", function(req, res) {
  burger.create(["burger_name"],[req.body.task],
        // Test it
 console.log('You sent, ' + req.body.task),
  
    // Send back the ID of the new quote
    function (err, result) {
      if (err) throw err;
  
      res.json({ id: result.insertId });
  });
    });


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
  //     // If no rows were changed, then the ID must not exist, so 404
  //     console.log(result);
  //     res.sendStatus(200);
  //   });

// Export routes for server.js to use.
module.exports = router;
