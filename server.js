const cors = require('cors')

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 4000;

app.use(cors());

const mysql = require('mysql');
// connection configurations
// TODO make this secure
const mc = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'coins',
    port: 3306
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route