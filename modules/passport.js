module.exports = app => {
    const
        passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        queryDb = require('../modules/dbConnection').queryDb,
        userQuery = `SELECT id FROM customers WHERE username=? AND PASSWORD(?)=password AND role='Administrator'`;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        done(null, { "id": id });
    });

    passport.use(new LocalStrategy((username, password, done) => {
        queryDb(userQuery, [username, password]).then(customers => {
            return done(null, { "id": customers[0].id });
        }).catch(err => {
            return done(null, false)
        });
    }));
}