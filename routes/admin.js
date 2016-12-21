const auth = require('../modules/basicAuth');

module.exports = app => {
    // show all users
    app.get('/admin', auth, (req, res, next) => {
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

    // new user
    app.get('/user', auth, (req, res, next) => {
        res.render("useredit", { "title": "New User", "user": {} });
    });

    // edit user
    app.get('/user/:id', auth, (req, res, next) => {
        const query = `SELECT * FROM users WHERE id = ?`;

        app.queryDb(query, [req.params.id]).then(user => {
            const userData = user[0] || {};
            res.render("useredit", { "title": "Edit User", "user": userData });
        }).catch(err => {
            next(err);
        });

    });

    // create user
    app.post('/users', auth, (req, res, next) => {
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
            res.redirect('/users');
        }).catch(err => {
            next(err);
        });
    });

    // delete a user
    app.delete('/users/:id', auth, (req, res, next) => {
        const query = "DELETE FROM users where id=?";

        app.queryDb(query, req.params.id).then(users => {
            res.redirect('/users');
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
