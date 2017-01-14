module.exports.SQL = {
    "COMPLETE_CUSTOMER": 'SELECT * FROM customers WHERE id = ?',
    "PUBLIC_CUSTOMER": `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER' AND id = ?`,
    "PUBLIC_CUSTOMER_LIST": `SELECT id, username, lastname, firstname, email FROM customers WHERE role = 'CUSTOMER'`,
    "COMPLETE_CUSTOMER_LIST": 'SELECT * FROM customers',
    "UPDATE_PASSWORD": 'UPDATE customers SET password = PASSWORD(?) WHERE username = ?',
    "DELETE_CUSTOMER": 'DELETE FROM customers where id=?',
    "SAVE_CUSTOMER": `INSERT into customers (
        username,
        role,
        email,
        firstname,
        lastname,
        country,
        city,
        zipcode,
        street,
        creditcardcmp,
        creditcardpan,
        creditcardcvv)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    "UPDATE_CUSTOMER": `UPDATE customers SET
        username = ?,
        role = ?,
        email = ?,
        firstname = ?,
        lastname = ?,
        country = ?,
        city = ?,
        zipcode = ?,
        street = ?,
        creditcardcmp = ?,
        creditcardpan = ?,
        creditcardcvv = ?
        WHERE id = ?`
}