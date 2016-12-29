module.exports = (app, ensureLoggedIn) => {
    // show all customers
    app.get('/admin/customers', ensureLoggedIn('/login'), (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = 'true';
        const queryParams = [];

        if (filterVal) {
            filterClause = `INSTR(CONCAT(username, '|', role, '|', firstname, '|', lastname, '|', email), ?) > 0`;
            queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || 'lastname';
        queryParams.push(orderCol);

        const query = `SELECT id, username, role, lastname, firstname, email FROM customers WHERE ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(customers => {
            res.render('customers', { "title": "Admin Customer List", "customers": customers, "filter": req.query.filter, mode: "admin" });
        }).catch(err => {
            next(err);
        });
    });

    // customer form
    app.get('/admin/customers/:id', ensureLoggedIn('/login'), (req, res, next) => {
        const template = 'edit_customer';
        let id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.render(template, { "title": "New Customer", "customer": {} });
        } else {
            const query = `SELECT * FROM customers WHERE id = ?`;

            app.queryDb(query, [id]).then(customer => {
                const customerData = customer[0] || {};
                res.render(template, { "title": "Edit Customer", "customer": customerData });
            }).catch(err => {
                next(err);
            });
        }
    });

    // create/update customer
    app.post('/admin/customers', ensureLoggedIn('/login'), (req, res, next) => {
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

        app.queryDb(query, customerData).then(rows => {
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;

            if (password === confirmPassword && password.length > 0) {
                app.queryDb("UPDATE customers SET password=PASSWORD(?) WHERE username=?", [password, username]).then(rows => {
                    // nothing to do
                }).catch(err => {
                    next(err);
                });
            }
            res.redirect('/admin/customers');
        }).catch(err => {
            next(err);
        });
    });

    // delete a customer
    app.delete('/admin/customers/:id', ensureLoggedIn('/login'), (req, res, next) => {
        const query = "DELETE FROM customers where id=?";

        app.queryDb(query, req.params.id).then(customers => {
            res.status(200).send();
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
