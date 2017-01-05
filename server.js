// modules
const
    express = require('express'),
    app = express(),
    express_session = require('express-session'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    path = require('path'),
    config = require('./config'),
    logger = require('./modules/logger')(app),
    morgan = require('morgan');

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
require('./modules/passport')(app);

// index route
require('./routes/index')(app);

// login route
require('./routes/login')(app);

// customers
require('./routes/customers')(app);

// administration
require('./routes/admin')(app);

// error handling
require('./routes/error')(app);

// start server
var server = app.listen(config.server.port, config.server.address, () => {
    logger.info('Service listening on %s:%s...', server.address().address, server.address().port);
});
