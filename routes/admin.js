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
        const id = parseInt(req.params.id) || 0;
        const template = 'edit_customer';
        if (id === 0) {
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
        
        const customerData = [
            req.body.username,
            req.body.password,
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

        if(req.body.id){
            query = UPDATE_QUERY;
            customerData.push(req.body.id);
        }
        
        app.queryDb(query, customerData).then(customers => {
            res.redirect('/admin/customers');
        }).catch(err => {
            next(err);
        });
    });

    // delete a customer
    app.delete('/admin/customers/:id', ensureLoggedIn('/login'), (req, res, next) => {
        const query = "DELETE FROM customers where id=?";

        app.queryDb(query, req.params.id).then(customers => {
            res.redirect('/admin/customers');
        }).catch(err => {
            next(err);
        });
    });
}

const SAVE_QUERY =
    `INSERT into customers (
        username,
        password,
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
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


const UPDATE_QUERY =
    `UPDATE customers SET
        username = ?,
        password = ?,
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
