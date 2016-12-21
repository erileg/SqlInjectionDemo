const authorize = require('../modules/basicAuth').authorize;

module.exports = app => {
    // show all users
    app.get('/admin/users', authorize, (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = "true";
        const queryParams = [];

        if (filterVal) {
            filterClause = "INSTR(CONCAT(firstname, '|', lastname, '|', email), ?) > 0";
            queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || "lastname";
        queryParams.push(orderCol);

        const query = `SELECT id, lastname, firstname, email FROM users WHERE ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(users => {
            res.render("admin", { "title": "User List", "users": users, "filter": req.query.filter });
        }).catch(err => {
            next(err);
        });
    });

    // user form
    app.get('/admin/users/:id', authorize, (req, res, next) => {
        const id = parseInt(req.params.id) || 0;
        if (id === 0) {
            res.render("useredit", { "title": "New User", "user": {} });
        } else {
            const query = `SELECT * FROM users WHERE id = ?`;

            app.queryDb(query, [id]).then(user => {
                const userData = user[0] || {};
                res.render("useredit", { "title": "Edit User", "user": userData });
            }).catch(err => {
                next(err);
            });
        }
    });

    // create/update user
    app.post('/admin/users', authorize, (req, res, next) => {
        const query = req.body.id ? UPDATE_QUERY : SAVE_QUERY;

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
            req.body.creditcardcmp,
            req.body.creditcardpan,
            req.body.creditcardcvv,
            req.body.id
        ];

        app.queryDb(query, userdata).then(users => {
            res.redirect('/admin/users');
        }).catch(err => {
            next(err);
        });
    });

    // delete a user
    app.delete('/admin/users/:id', authorize, (req, res, next) => {
        const query = "DELETE FROM users where id=?";

        app.queryDb(query, req.params.id).then(users => {
            res.redirect('/admin/users');
        }).catch(err => {
            next(err);
        });
    });
}

const SAVE_QUERY =
    `INSERT into users (
        username,
        password,
        email,
        firstname,
        lastname,
        country,
        city,
        zipcode,
        street,
        creditcardcmp,
        creditcardpan,
        creditcardcvv)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


const UPDATE_QUERY =
    `UPDATE users SET
        username = ?,
        password = ?,
        email = ?,
        firstname = ?,
        lastname = ?,
        country = ?,
        city = ?,
        zipcode = ?,
        street = ?,
        creditcardcmp = ?,
        creditcardpan = ?,
        creditcardcvv = ?
        WHERE id = ?`
