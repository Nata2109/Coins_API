'user strict';

var mysql = require('mysql');

//local mysql db connection
// TODO make this secure
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'coins',
    port: 3306
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;