const mysql = require('mysql');
const config = require("../config");
const pool = mysql.createPool(config.mysqlconfig);

module.exports.queryDb = (query, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        handleError(err, connection);
        return reject(err);
      }

      connection.on('error', err => {
        handleError(err, connection);
        return reject(err);
      });

      connection.query(query, params, (err, records) => {
        console.log("query: %s", query);
        connection.release();
        return (err ? reject(err) : resolve(records));
      });
    });
  })
};

const handleError = function (err, connection, reject) {
  console.log("dbConnection -> " + err);
  if (connection) {
    connection.release();
  }
}