const basicAuth = require('basic-auth');

module.exports.authorize = (req, res, next) => {
    const unauthorized = res => {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    };

    if (isAdminRequest(req)) {
        return next();
    } else {
        return unauthorized(res);
    };
};

const isAdminRequest = function (req) {
    const user = basicAuth(req);
    return user && user.name === 'admin' && user.pass === 'imperator'
};

module.exports.isAdminRequest = isAdminRequest;