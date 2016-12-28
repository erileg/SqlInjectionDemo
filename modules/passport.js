const
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const users = [
  {
    "id": 0,
    "username": "admin",
    "passwort": "imperator",
    "role": "ADMINSTRATOR"
  }
]

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, users[0]);
});

passport.use(new LocalStrategy((username, password, done) => {
  if (username == 'admin' && password == 'imperator') {
    return done(null, users[0]);
  }
  return done(null, false)
}));

module.exports = passport;