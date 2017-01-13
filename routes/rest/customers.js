const queryDb = require('../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/public/rest/customers', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER'`;
        sendCustomers(query, res, next);
    });

    app.get('/public/rest/customers/:id', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' AND id = ?`;
        sendCustomer(query, [req.params.id], res, next);
    });

    app.get('/protected/rest/customers', (req, res, next) => {
        const query = 'SELECT * FROM customers';
        sendCustomers(query, res, next);
    });

    // new customer
    app.post('/protected/rest/customers', (req, res, next) => {
        res.status(405).send();
    });

    app.get('/protected/rest/customers/:id', (req, res, next) => {
        const query = `SELECT * FROM customers WHERE id = ?`;
        sendCustomer(query, [req.params.id], res, next);
    });

    // uodate customer
    app.put('/protected/rest/customers/:id', (req, res, next) => {
        res.status(405).send();
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

const sendCustomer = function (query, queryParams, res, next) {
    queryDb(query, queryParams).then(customers => {
        if (customers.length == 1) {
            res.json(customers[0]);
        } else {
            res.status(404).send('not found');
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