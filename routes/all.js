const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = app => {
    require('./index')(app);
    require('./login')(app);
    require('./public/html/customers')(app);
    require('./public/rest/customers')(app);

    app.use('/protected', ensureLoggedIn('/login'));
    require('./protected/html/customers')(app);
    require('./protected/rest/customers')(app);
    
    require('./error')(app);
}