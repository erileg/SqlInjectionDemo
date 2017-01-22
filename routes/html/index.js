module.exports = app => {
	app.get("/", (req, res) => {
		var routes = app._router.stack.filter(r => {
			return r.route && r.route.path && r.route.path !== "/";
		}).map(r => {
			return {
				"method": Object.keys(r.route.methods)[0].toUpperCase(),
				"url": r.route.path
			};
		});

		res.render("index", {
			"title": `${process.env.npm_package_description}`,
			"routes": routes
		});
	});
}
