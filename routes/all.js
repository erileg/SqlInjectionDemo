const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = app => {
    require('./index')(app);
    require('./login')(app);
    require('./public/customers')(app);
    require('./public/rest/customers')(app);

    app.use('/protected', ensureLoggedIn('/login'));
    require('./protected/customers')(app);
    require('./protected/rest/customers')(app);
    
    require('./error')(app);
}