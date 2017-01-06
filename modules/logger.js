const
    winston = require('winston'),
    morgan = require('morgan');

winston.emitErrs = true;

module.exports = logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: () => (new Date()).toLocaleString(),
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
