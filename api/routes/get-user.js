const express = require('express');
const router = express.Router();
const getData = require('../controller/getUserData');

router.get('/get-users/:id',getData.getQueryForDb);          
                            //         /get-users/4 routes here it get id and fetch data from database
module.exports = router;