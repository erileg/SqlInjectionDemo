// modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
const path = require("path");

// read configuration
const config = require("./config");

var pool = mysql.createPool(config.mysqlconfig);

app.queryDb = function (query, params, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("db connection error: " + err);
      connection.release();
      callback(err, []);
    }

    connection.query(query, params, function (err, records) {
      connection.release();
      callback(err, records);
    });

    connection.on('error', function (err) {
      console.log("db connection error: " + err);
      callback(err, []);
    });
  });
}

// setup express to use pug template engine
app.set("view engine", "pug");
app.locals.pretty = true;
app.use(express.static(path.join(__dirname, "public")));

// body parser
app.use(bodyParser.json());

// middleware for all requests
require("./routes/all")(app);

// init saleport routes
require("./routes/index")(app);

// users
require("./routes/users")(app);

// error handling
require("./routes/error")(app);

// start server
var server = app.listen(config.server.port, config.server.address, () => {
  console.log("Service listening on %s:%s...", server.address().address, server.address().port);
});
