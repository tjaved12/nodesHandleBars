var connection = require("./Config/connection.js");
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();


app.use(express.static('public'))
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8070;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
 
   
  findandReplace: function(whatToSelect, table,column) {
    var queryString = "SELECT ? FROM ?? WHERE ??";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, column], function(err, data) {
      if (err) throw err;
      console.log(data);
    });
  },
  selectWhere: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
    
          console.log(result);
    });
  },
};

app.get("/burger", function (req, res) {
  connection.query("SELECT * FROM burger;", function (err, data) {
    if (err) throw err;

    //Test it
    console.log('The solution is: ', data);

    //Test it
    //return res.send(data);

    res.render("all-favourite", {
      burger: data    });
  });
});



app.post("/burger/save", function (req, res) {

  // Test it
  console.log('You sent, ' + req.body.task);


  connection.query("INSERT INTO burger (burger_name) VALUES (?)", [req.body.task], function (err, result) {
    if (err) throw err;

    res.redirect("/burger");
  });
});
app.post("/burger/save/update", function (req, res) {

  // Test it
  console.log('You sent, ' + req.body.true);


  connection.query("UPDATE burger SET devoured = 1 WHERE devoured = 0", function (err, result) {
    if (err) throw err;

    res.redirect("/burger");
  });
});

app.listen(PORT, function () {
  console.log("App listening on localhost: " + PORT);
});
module.exports = orm;


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

   