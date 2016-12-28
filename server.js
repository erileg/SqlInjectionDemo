// modules
const
  express = require('express'),
  favicon = require('serve-favicon'),
  express_session = require('express-session'),
  passport = require('./modules/passport'),
  ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn,
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  config = require('./config');

require('console-stamp')(console, {
  pattern: 'dd.mm.yyyy HH:MM:ss',
  label: false,
  colors: {
    stamp: 'yellow',
    label: 'white',
    metadata: 'green'
  }
});


// register MySql query function in app obejct
app.queryDb = require('./modules/dbConnection').queryDb;

// setup express to use pug template engine
app.set('view engine', 'pug');
app.locals.pretty = true;

// setup serving static content and favicon
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// required for passport
app.use(express_session({ secret: 'lolwut', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging
app.use(morgan(':remote-addr - [:date[clf]] ":method :url HTTP/:http-version" :status :req[Accept] :res[content-length]'));

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
  console.log('Service listening on %s:%s...', server.address().address, server.address().port);
});
