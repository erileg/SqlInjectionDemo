const
  LocalStrategy = require('passport-local').Strategy,
  query = `SELECT id FROM customers WHERE username=? AND PASSWORD(?)=password`;

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    done(null, { "id": id });
  });

  passport.use(new LocalStrategy((username, password, done) => {
    app.queryDb(query, [username, password]).then(customers => {
      return done(null, { "id": customers[0].id });
    }).catch(err => {
      return done(null, false)
    });
  }));
}