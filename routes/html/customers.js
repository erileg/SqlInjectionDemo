const queryDb = require('../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/public/customers', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' ${createFilterClause(req.query.filter)} ORDER BY ??`;

        queryDb(query, [req.query.orderby || 'lastname']).then(customers => {
            res.render('customers', { "title": 'Customer List', "customers": customers, "filter": req.query.filter, "mode": 'view' });
        }).catch(err => {
            next(err);
        });
    });

    app.get('/protected/customers', (req, res, next) => {
        const query = `SELECT id, username, role, lastname, firstname, email FROM customers WHERE true ${createFilterClause(req.query.filter)} ORDER BY ??`;

        queryDb(query, [req.query.orderby || 'lastname']).then(customers => {
            res.render('customers', { "title": 'Admin Customer List', "customers": customers, "filter": req.query.filter, "mode": 'admin' });
        }).catch(err => {
            next(err);
        });
    });

    const createFilterClause = function (filterVal) {
        return filterVal ? `AND INSTR(CONCAT(username, '|', firstname, '|', lastname, '|', email), "${filterVal}") > 0` : '';
    }

    app.get('/protected/customers/:id', (req, res, next) => {
        const TEMPLATE = 'edit_customer';
        
        let id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.render(TEMPLATE, { "title": "New Customer", "customer": {} });
        } else {
            const query = `SELECT * FROM customers WHERE id = ?`;

            queryDb(query, [id]).then(customer => {
                const customerData = customer[0] || {};
                res.render(TEMPLATE, { "title": "Edit Customer", "customer": customerData });
            }).catch(err => {
                next(err);
            });
        }
    });

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
                queryDb("UPDATE customers SET password = PASSWORD(?) WHERE username = ?", [password, username]).then(rows => {
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
