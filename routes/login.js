module.exports = (app, passport) => {
	app.get("/login", (req, res) => {
		res.render("login", {
			"title": "Please login"
		});
	});

	app.get("/logout", (req, res) => {
		req.logout();
		res.redirect('/customers');
	});

	app.post('/login', passport.authenticate('local', {
		successReturnToOrRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));
}
