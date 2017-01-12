const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = app => {
    app.use('/protected', ensureLoggedIn('/login'));

    require('./html/index')(app);
    require('./html/login')(app);
    require('./html/customers')(app);
    require('./rest/customers')(app);
    require('./html/error')(app);
}