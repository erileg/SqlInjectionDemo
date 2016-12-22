module.exports = app => {
    // show all customers
    app.get('/customers', (req, res, next) => {
        const filterVal = req.query.filter;
        let filterClause = "true";
        const queryParams = [];

        if (filterVal) {
            filterClause = `INSTR(CONCAT(username, '|', firstname, '|', lastname, '|', email), "${filterVal}") > 0`;
            //filterClause = "INSTR(CONCAT(username, '|', firstname, '|', lastname, '|', email), ?) > 0";
            //queryParams.push(filterVal);
        }

        const orderCol = req.query.orderby || "lastname";
        queryParams.push(orderCol);

        const query = `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' AND ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(customers => {
            res.render("customers", { "title": "Customer List", "customers": customers, "filter": req.query.filter, mode: "view" });
        }).catch(err => {
            next(err);
        });
    });
}
