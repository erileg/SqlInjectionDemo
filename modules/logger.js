const winston = require('winston');

winston.emitErrs = true;

module.exports = new winston.Logger({
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
