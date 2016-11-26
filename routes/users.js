const mysql = require("mysql");

module.exports = app => {    
    // show all users
    app.get('/users', (req, res, next) => {
        const filter = req.query.filter ? req.query.filter : ""; 
        //const filter = req.params.filter ? req.params.filter : ""; 
        const query = `SELECT lastname, firstname, email FROM users WHERE INSTR(lastname, ?) > 0 ORDER BY lastname`;
        //console.log(`query: ${query}`);
        app.queryDb(query, [req.query.filter], (err, records) => {
            if (!err){
                res.render("users", {"title": "users", "users":records});
                //console.log(records);
            }else{
                next();
            }
        });
    });

    // create user
    app.post('/users', (req, res, next) => {
    });

    // delete a user
    app.delete('/users/:id', (req, res, next) => {
    });
}
