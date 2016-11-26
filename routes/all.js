// middleware to use for all requests
module.exports = app => {
    app.use((req, res, next) => {
        console.log("Request: %s, %s '%s' [%s]", req.connection.remoteAddress, req.method, unescape(req.url), req.get("Accept"));
        next();
    });
}
