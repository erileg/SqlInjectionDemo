const mysql = require('mysql');
const config = require("../config");
const pool = mysql.createPool(config.mysqlconfig);

module.exports.queryDb = (query, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("dbConnection -> " + err);
        connection.release();
        return reject(err)
      }

      connection.query(query, params, (err, records) => {
        connection.release();
        return resolve(records)
      });

      connection.on('error', err => {
        console.log("dbConnection -> " + err);
        return reject(err);
      });
    });
  })
};
