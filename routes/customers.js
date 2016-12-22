module.exports = app => {
    // show all customers
    app.get('/customers', (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = "true";
        const queryParams = [];

        if (filterVal) {
            filterClause = `INSTR(CONCAT(firstname, '|', lastname, '|', email), "${filterVal}") > 0`;
            //filterClause = "INSTR(CONCAT(firstname, '|', lastname, '|', email), ?) > 0";
            //queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || "lastname";
        queryParams.push(orderCol);

        const query = `SELECT id, lastname, firstname, email FROM customers WHERE ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(customers => {
            res.render("customers", { "title": "Customer List", "customers": customers, "filter": req.query.filter });
        }).catch(err => {
            next(err);
        });
    });
}
