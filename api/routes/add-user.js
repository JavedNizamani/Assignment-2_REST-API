const express = require('express');
const router = express.Router();
const addUser = require('../controller/addUser');

router.post('/add-users', addUser.createUser);          
                                                        // add-users route
module.exports = router;