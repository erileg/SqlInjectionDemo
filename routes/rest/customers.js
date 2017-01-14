const queryDb = require('../../modules/dbConnection').queryDb;
const SQL = require('../../modules/constants').SQL;

module.exports = app => {
    app.get('/public/rest/customers', (req, res, next) => {
        sendCustomers(SQL.PUBLIC_CUSTOMER_LIST, res, next);
    });

    app.get('/public/rest/customers/:id', (req, res, next) => {
        sendCustomer(SQL.PUBLIC_CUSTOMER, [req.params.id], res, next);
    });

    app.get('/protected/rest/customers', (req, res, next) => {
        sendCustomers(SQL.COMPLETE_CUSTOMER_LIST, res, next);
    });

    // new customer
    app.post('/protected/rest/customers', (req, res, next) => {
        res.sendStatus(405);
    });

    app.get('/protected/rest/customers/:id', (req, res, next) => {
        sendCustomer(SQL.COMPLETE_CUSTOMER, [req.params.id], res, next);
    });

    // uodate customer
    app.put('/protected/rest/customers/:id', (req, res, next) => {
        res.sendStatus(405);
    });

    app.delete('/protected/rest/customers/:id', (req, res, next) => {
        queryDb(SQL.DELETE_CUSTOMER, [req.params.id]).then(customers => {
            res.sendStatus(200);
        }).catch(err => {
            next(err);
        });
    });
}

const sendCustomer = function (query, queryParams, res, next) {
    queryDb(query, queryParams).then(customers => {
        if (customers.length == 1) {
            res.json(customers[0]);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        next(err);
    });
}

const sendCustomers = function (query, res, next) {
    queryDb(query).then(customers => {
        res.json(customers);
    }).catch(err => {
        next(err);
    });
}