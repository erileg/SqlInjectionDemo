const mysql = require("mysql");

module.exports = app => {
    // show all users
    app.get('/users', (req, res, next) => {
        const filterClause = req.query.filter ? "INSTR(CONCAT(firstname, '|', lastname, '|', email), ?)" : "true";
        const orderCol = req.query.orderby || "lastname";
        const query = `SELECT id, lastname, firstname, email FROM users WHERE ${filterClause} > 0 ORDER BY ${orderCol}`;
        //console.log(`query: ${query}`);
        
        app.queryDb(query, [req.query.filter]).then(users => {
            res.render("users", { "title": "users", "users": users });
        }).catch(err => {
            next();
        });
    });

    // create user
    app.post('/users', (req, res, next) => {
    });

    // delete a user
    app.delete('/users/:id', (req, res, next) => {
    });
}
