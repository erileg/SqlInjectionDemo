const
    config = require('../config'),
    mysql = require('mysql'),
    pool = mysql.createPool(config.mysqlconfig),
    logger = require('./logger')

const handleError = (err, connection, reject) => {
    logger.error(err);
    if (connection) {
        connection.release();
    }
};

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

            const sqlQuery = connection.query(query, params, (err, records) => {
                connection.release();
                return (err ? reject(err) : resolve(records));
            });

            logger.debug('queryDb -> %s', sqlQuery.sql);
        });
    })
};
