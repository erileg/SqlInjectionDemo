module.exports = app => {
    require('./login')(app);
    require('./index')(app);
    require('./customers')(app);
    require('./admin')(app);
    require('./error')(app);
}