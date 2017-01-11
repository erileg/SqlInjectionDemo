const queryDb = require('../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/protected/customers', (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = '';
        const queryParams = [];

        if (filterVal) {
            filterClause = `WHERE INSTR(CONCAT(username, '|', role, '|', firstname, '|', lastname, '|', email), ?) > 0`;
            queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || 'lastname';
        queryParams.push(orderCol);

        const query = `SELECT id, username, role, lastname, firstname, email FROM customers ${filterClause} ORDER BY ??`;

        queryDb(query, queryParams).then(customers => {
            res.render('customers', { "title": "Admin Customer List", "customers": customers, "filter": req.query.filter, mode: "admin" });
        }).catch(err => {
            next(err);
        });
    });

    // customer form
    app.get('/protected/customers/:id', (req, res, next) => {
        const template = 'edit_customer';
        let id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.render(template, { "title": "New Customer", "customer": {} });
        } else {
            const query = `SELECT * FROM customers WHERE id = ?`;

            queryDb(query, [id]).then(customer => {
                const customerData = customer[0] || {};
                res.render(template, { "title": "Edit Customer", "customer": customerData });
            }).catch(err => {
                next(err);
            });
        }
    });

    // create/update customer
    app.post('/protected/customers', (req, res, next) => {
        let query = SAVE_QUERY;
        const username = req.body.username;

        const customerData = [
            username,
            req.body.role,
            req.body.email,
            req.body.firstname,
            req.body.lastname,
            req.body.country,
            req.body.city,
            req.body.zipcode,
            req.body.street,
            req.body.creditcardcmp,
            req.body.creditcardpan,
            req.body.creditcardcvv
        ];

        if (req.body.id) {
            query = UPDATE_QUERY;
            customerData.push(req.body.id);
        }

        queryDb(query, customerData).then(rows => {
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;

            if (password === confirmPassword && password.length > 0) {
                app.queryDb("UPDATE customers SET password=PASSWORD(?) WHERE username=?", [password, username]).then(rows => {
                    // nothing to do
                }).catch(err => {
                    next(err);
                });
            }
            res.redirect('/protected/customers');
        }).catch(err => {
            next(err);
        });
    });
}

const SAVE_QUERY =
    `INSERT into customers (
        username,
        role,
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
    `UPDATE customers SET
        username = ?,
        role = ?,
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
