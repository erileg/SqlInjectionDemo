const mysql = require('mysql');
const config = require("../config");
const pool = mysql.createPool(config.mysqlconfig);

module.exports.queryDb = (query, params, callback) => {
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
