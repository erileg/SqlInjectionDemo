// modules
const
    express = require('express'),
    favicon = require('serve-favicon'),
    express_session = require('express-session'),
    passport = require('passport'),
    ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn,
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./config'),
    logger = require('./modules/logger'),
    morgan = require('morgan');


// request logging
app.use(
    morgan(':remote-addr - ":method :url HTTP/:http-version" :status :res[content-length]', {
        "stream": {
            write: message => logger.debug(message.trim())
        }
    }
));

// register MySql query function in app obejct
app.queryDb = require('./modules/dbConnection').queryDb;

// setup express to use pug template engine
app.set('view engine', 'pug');
app.locals.pretty = true;

// setup serving static content and favicon
app.use(express.static(path.join(__dirname, 'public'), { "maxAge": "1y" }));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// required for passport
app.use(express_session({ secret: 'lolwut', resave: false, saveUninitialized: true }));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// initialize passport
require('./modules/passport')(app, passport);

// index route
require('./routes/login')(app, passport);

// index route
require('./routes/index')(app);

// customers
require('./routes/customers')(app);

// administration
require('./routes/admin')(app, ensureLoggedIn);

// error handling
require('./routes/error')(app);

// start server
var server = app.listen(config.server.port, config.server.address, () => {
    logger.info('Service listening on %s:%s...', server.address().address, server.address().port);
});
