module.exports = app => {
	app.get("/", (req, res) => {
		var routes = app._router.stack.filter(r => {
			return r.route && r.route.path && r.route.path !== "/";
		}).map(r => {
			return {
				url: `${req.protocol}://${req.hostname}:${req.socket.localPort}${r.route.path}`,
				method: Object.keys(r.route.methods)[0].toUpperCase()
			};
			// return `${req.protocol}://${req.hostname}:${req.socket.localPort}${r.route.path.replace(/:(\w+)/g, "{$1}")}`;
		});

		res.render("index", {
			"title": `${process.env.npm_package_description}`,
			"routes": routes
		});
	});
}
