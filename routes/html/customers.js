const queryDb = require('../../modules/dbConnection').queryDb;
const SQL = require('../../modules/constants').SQL;

module.exports = app => {
    app.get('/public/customers', (req, res, next) => {
        queryDb(SQL.PUBLIC_FILTERED_CUSTOMER_LIST, [req.query.filter || '', req.query.orderby || 'lastname']).then(customers => {
            res.render('customers', { "title": 'Customer List', "customers": customers, "filter": req.query.filter, "mode": 'view' });
        }).catch(err => {
            next(err);
        });
    });

    app.get('/protected/customers', (req, res, next) => {
        queryDb(SQL.PROTECTED_FILTERED_CUSTOMER_LIST, [req.query.filter || '', req.query.orderby || 'lastname']).then(customers => {
            res.render('customers', { "title": 'Admin Customer List', "customers": customers, "filter": req.query.filter, "mode": 'admin' });
        }).catch(err => {
            next(err);
        });
    });

    app.get('/protected/customers/:id', (req, res, next) => {
        const TEMPLATE = 'edit_customer';
        
        let id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.render(TEMPLATE, { "title": "New Customer", "customer": {} });
        } else {
            queryDb(SQL.COMPLETE_CUSTOMER, [id]).then(customer => {
                const customerData = customer[0] || {};
                res.render(TEMPLATE, { "title": "Edit Customer", "customer": customerData });
            }).catch(err => {
                next(err);
            });
        }
    });

    app.post('/protected/customers', (req, res, next) => {
        let query = SQL.SAVE_CUSTOMER;
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
            query = SQL.UPDATE_CUSTOMER;
            customerData.push(req.body.id);
        }

        queryDb(query, customerData).then(rows => {
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;

            if (password === confirmPassword && password.length > 0) {
                queryDb(SQL.UPDATE_PASSWORDS, [password, username]).then(rows => {
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
