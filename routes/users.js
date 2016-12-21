module.exports = app => {
    // show all users
    app.get('/users', (req, res, next) => {
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

        const query = `SELECT id, lastname, firstname, email FROM users WHERE ${filterClause} ORDER BY ??`;

        app.queryDb(query, queryParams).then(users => {
            res.render("users", { "title": "User List", "users": users, "filter": req.query.filter });
        }).catch(err => {
            next(err);
        });
    });
}
