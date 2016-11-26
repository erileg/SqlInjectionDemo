
module.exports = app => {    
    // show all users
    app.get('/users', (req, res, next) => {
        app.queryDb('SELECT lastname, firstname, email FROM users ORDER BY lastname', [], function (err, records) {
            if (err) throw err;

            res.render("users", {"title": "users", "users":records});
            console.log(records);
        });
    });

    // show specific users
    app.get('/users/:id', (req, res, next) => {
    });

    // create user
    app.post('/users', (req, res, next) => {
    });

    // delete a user
    app.delete('/users/:id', (req, res, next) => {
    });
}
