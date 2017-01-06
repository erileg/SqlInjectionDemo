const queryDb = require('../modules/dbConnection').queryDb;

module.exports = app => {

    app.get('/customers', (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = '';
        const queryParams = [];

        if (filterVal) {
            filterClause = `AND INSTR(CONCAT(username, '|', firstname, '|', lastname, '|', email), "${filterVal}") > 0`;
        }

        const orderCol = req.query.orderby || 'lastname';
        queryParams.push(orderCol);

        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' ${filterClause} ORDER BY ??`;

        queryDb(query, queryParams).then(customers => {
            res.render('customers', { "title": "Customer List", "customers": customers, "filter": req.query.filter, mode: "view" });
        }).catch(err => {
            next(err);
        });
    });
}
