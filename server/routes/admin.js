/* Nodejs imports */

/* Express imports */
const express = require('express');

/* Local imports */
const path = require('../util/path'); //Using a created path instead of the node default
const adminController = require('../controllers/admin');

/* Mounting the routes handler */
const router = express.Router();

/* Manage GET & POST */

// /admin/ => GET POST
router.get('/add', adminController.getData);

module.exports = router;