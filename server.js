// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

require('console-stamp')(console, {
  pattern: 'dd.mm.yyyy HH:MM:ss',
  label: false,
  colors: {
    stamp: 'yellow',
    label: 'white',
    metadata: 'green'
  }
});

// read configuration
const config = require('./config');

// register MySql query function
app.queryDb = require('./modules/dbConnection').queryDb;

// setup express to use pug template engine
app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(bodyParser.json());

// middleware for all requests
require('./routes/all')(app);

// init saleport routes
require('./routes/index')(app);

// users
require('./routes/users')(app);

// error handling
require('./routes/error')(app);

// start server
var server = app.listen(config.server.port, config.server.address, () => {
  console.log('Service listening on %s:%s...', server.address().address, server.address().port);
});
