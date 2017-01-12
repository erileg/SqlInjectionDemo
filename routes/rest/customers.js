const queryDb = require('../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/public/rest/customers', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER'`;
        sendCustomers(query, [], res, next);
    });

    app.get('/public/rest/customers/:id', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' AND id = ?`;
        sendCustomers(query, [req.params.id], res, next);
    });

    app.get('/protected/rest/customers', (req, res, next) => {
        const query = 'SELECT * FROM customers';
        sendCustomers(query, [], res, next);
    });

    app.get('/protected/rest/customers/:id', (req, res, next) => {
        const query = `SELECT * FROM customers WHERE id = ?`;
        sendCustomers(query, [req.params.id], res, next);
    });

    app.delete('/protected/customers/:id', (req, res, next) => {
        const query = "DELETE FROM customers where id=?";
        queryDb(query, [req.params.id]).then(customers => {
            res.status(200).send();
        }).catch(err => {
            next(err);
        });
    });
}

const sendCustomers = function (query, params, res, next) {
    queryDb(query, params).then(customers => {
        if (customers && customers.length == 1) {
            res.json(customers[0]);
        } else {
            res.json(customers);
        }
    }).catch(err => {
        next(err);
    });
}