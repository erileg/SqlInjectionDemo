// modules
const
    fs = require('fs'),
    express = require('express'),
    app = express(),
    https = require('https'),
    express_session = require('express-session'),
    compression = require("compression"),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    path = require('path'),
    config = require('./config'),
    logger = require('./modules/logger'),
    morgan = require('morgan');

// setup express to use pug template engine
app.set('view engine', 'pug');
app.locals.pretty = true;

// setup serving static content and favicon
app.use(express.static(path.join(__dirname, 'public'), { "maxAge": "1y" }));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// init sessions for passport
app.use(express_session({ secret: 'lolwut', resave: false, saveUninitialized: true }));

// initialize passport
require('./modules/passport')(app);

// initialize compression
app.use(compression());

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// init morgan request logging and redirect to winston
app.use(
    morgan(':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length]', {
        "stream": {
            write: message => logger.debug(message.trim())
        }
    })
);

// init routes
require('./routes/all')(app);

// start http server
const httpServer = app.listen(config.server.port, config.server.address, () => {
    logger.info('HTTP Service listening on %s:%s...', httpServer.address().address, httpServer.address().port);
});

// start https server
const httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

httpsServer.listen(config.server.sslport, config.server.address, () => {
    logger.info('HTTPS Service listening on %s:%s...', httpsServer.address().address, httpsServer.address().port);
});
