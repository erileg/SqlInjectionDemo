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

    // edit user
    app.get('/user', (req, res, next) => {
        res.render("useredit", { "title": "Edit"});
    });
    
    // create user
    app.post('/users', (req, res, next) => {
        const query = `INSERT into users (
            username,
            password,
            email,
            firstname,
            lastname,
            country,
            city,
            zipcode,
            street,
            streetnumber,
            creditcardcmp,
            creditcardpan,
            creditcardcvv
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const userdata = [
                req.body.username,
                req.body.password,
                req.body.email,
                req.body.firstname,
                req.body.lastname,
                req.body.country,
                req.body.city,
                req.body.zipcode,
                req.body.street,
                req.body.streetnumber,
                req.body.creditcardcmp,
                req.body.creditcardpan,
                req.body.creditcardcvv            
        ]

        app.queryDb(query, userdata).then(users => {
            res.redirect('/users');
        }).catch(err => {
            next();
        });
    });

    // delete a user
    app.delete('/users/:id', (req, res, next) => {
    });
}
