const authorize = require('../modules/basicAuth').authorize;

module.exports = app => {
    // show all customers
    app.get('/admin/customers', authorize, (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = "true";
        const queryParams = [];

        if (filterVal) {
            filterClause = "INSTR(CONCAT(firstname, '|', lastname, '|', email), ?) > 0";
            queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || "lastname";
        queryParams.push(orderCol);

        const query = `SELECT id, lastname, firstname, email FROM customers WHERE ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(customers => {
            res.render("admin", { "title": "Customer List", "customers": customers, "filter": req.query.filter });
        }).catch(err => {
            next(err);
        });
    });

    // customer form
    app.get('/admin/customers/:id', authorize, (req, res, next) => {
        const id = parseInt(req.params.id) || 0;
        if (id === 0) {
            res.render("customeredit", { "title": "New Customer", "customer": {} });
        } else {
            const query = `SELECT * FROM customers WHERE id = ?`;

            app.queryDb(query, [id]).then(customer => {
                const customerData = customer[0] || {};
                res.render("customeredit", { "title": "Edit Customer", "customer": customerData });
            }).catch(err => {
                next(err);
            });
        }
    });

    // create/update customer
    app.post('/admin/customers', authorize, (req, res, next) => {
        const query = req.body.id ? UPDATE_QUERY : SAVE_QUERY;

        const customerdata = [
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

        app.queryDb(query, customerdata).then(customers => {
            res.redirect('/admin/customers');
        }).catch(err => {
            next(err);
        });
    });

    // delete a customer
    app.delete('/admin/customers/:id', authorize, (req, res, next) => {
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
