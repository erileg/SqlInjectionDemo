const passport = require('passport');

module.exports = app => {
	app.get("/login", (req, res) => {
		res.render("login", {
			"title": "Please login"
		});
	});

	app.post('/login', passport.authenticate('local', {
		successReturnToOrRedirect: '/',
		failureRedirect: '/login'
	}));

	app.get("/logout", (req, res) => {
		req.logout();
		res.redirect('/public/customers');
	});
}
