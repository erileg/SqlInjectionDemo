const basicAuth = require('basic-auth');


module.exports.authorize = (req, res, next) => {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    if (user.name === 'admin' && user.pass === 'imperator') {
        return next();
    } else {
        return unauthorized(res);
    };
};
