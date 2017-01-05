module.exports = function (app) {
    const
        winston = require('winston'),
        morgan = require('morgan');

    winston.emitErrs = true;

    const logger = new winston.Logger({
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

    // request logging
    app.use(
        morgan(':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length]', {
            "stream": {
                write: message => logger.debug(message.trim())
            }
        }
        ));

    return logger;
}

