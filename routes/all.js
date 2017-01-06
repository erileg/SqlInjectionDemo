const
    ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = app => {
    // index route
    require('login')(app, passport);

    // index route
    require('index')(app);

    // customers
    require('customers')(app);

    // administration
    require('admin')(app, ensureLoggedIn);

    // error handling
    require('error')(app);
}