// Dependencies

var orm = require("./orm.js");
//Find all from Table Burger
orm.selectWhere("burger");
//Change the value of Devoured
orm.findandReplace("burger", "burger","devoured" );

// var connection = require("./connection.js");
// var express = require("express");
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// var app = express();


// app.use(express.static('public'))
// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8090;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");


// Routes
// app.get("/weekday", function(req, res) {
//   res.render("index", lunches[0]);
// });

// app.get("/", function(req, res) {
//   res.render("all-favourite");
// });


// Find all the pets ordering by the lowest price to the highest price.


// Find all from burger table


// Find the buyer with the most pets.


// app.get("/burger", function (req, res) {
//   connection.query("SELECT * FROM burger;", function (err, data) {
//     if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

//     res.render("all-favourite", {
//       burger: data
//     });
//   });
// });


// app.post("/burger/save", function (req, res) {

//   // Test it
//   console.log('You sent, ' + req.body.task);


//   connection.query("INSERT INTO burger (burger_name) VALUES (?)", [req.body.task], function (err, result) {
//     if (err) throw err;

//     res.redirect("/burger");
//   });
// });
// app.post("/burger/save/update", function (req, res) {

//   // Test it
//   console.log('You sent, ' + req.body.true);


//   connection.query("UPDATE burger SET devoured = 1 WHERE devoured = 0", function (err, result) {
//     if (err) throw err;

//     res.redirect("/burger");
//   });
// });


// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });