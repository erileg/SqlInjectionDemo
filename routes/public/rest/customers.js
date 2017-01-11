const queryDb = require('../../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/public/rest/customers', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER'`;

        queryDb(query).then(customers => {
            res.json(customers);
        }).catch(err => {
            next(err);
        });
    });

    app.get('/public/rest/customers/:id', (req, res, next) => {
        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' AND id = ?`;

        queryDb(query, [req.params.id]).then(customers => {
            if (customers.length == 1) {
                res.json(customers[0]);
            } else {
                res.status(404).send();
            }
        }).catch(err => {
            next(err);
        });
    });
}
