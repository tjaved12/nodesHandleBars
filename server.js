// Dependencies
var orm = require("./config/orm.js");

//Find all from Table Burger
orm.selectWhere("burger");

//Change the value of Devoured
orm.findandReplace("burger", "burger","devoured" );
