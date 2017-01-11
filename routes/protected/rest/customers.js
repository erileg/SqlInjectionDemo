const queryDb = require('../../../modules/dbConnection').queryDb;

module.exports = app => {
    app.get('/protected/rest/customers', (req, res, next) => {

        const query = 'SELECT * FROM customers';

        queryDb(query).then(customers => {
            res.json(customers);
        }).catch(err => {
            next(err);
        });
    });

    // customer form
    app.get('/protected/rest/customers/:id', (req, res, next) => {
        const query = `SELECT * FROM customers WHERE id = ?`;

        queryDb(query, [id]).then(customer => {
            if (customers.length == 1) {
                res.json(customers[0]);
            } else {
                res.status(404).send();
            }
        });
    });

    app.delete('/admin/customers/:id', (req, res, next) => {
        const query = "DELETE FROM customers where id=?";

        app.queryDb(query, req.params.id).then(customers => {
            res.status(200).send();
        }).catch(err => {
            next(err);
        });
    });
}