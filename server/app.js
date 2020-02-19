/* Nodejs imports */
//require('dotenv').config();
const path = require('path');

/* Express imports */
const express = require("express");
const bodyParser = require("body-parser");

/* Local imports */
const errorController = require('./controllers/error');

/* Global Variables */
let port = process.env.PORT || process.argv[2] || 5000;
const hostname = "127.0.0.1";

/* Creating the express app */
const app = express();

/* Routes */
const adminRoutes = require('./routes/admin');

/* Body Parser */
app.use(bodyParser.urlencoded({ extended: true })); //x-www-form-urlencoded <form>
app.use(bodyParser.json()); //application/json
app.use(express.static(path.join(__dirname, 'public'))); 

/* Manage routes */
app.use('/admin', adminRoutes);

app.use(errorController.get404);

/* Server listener */
app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log(`Worker ${process.pid} started`);
});