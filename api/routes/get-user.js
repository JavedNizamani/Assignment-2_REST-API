const express = require('express');
const router = express.Router();
const getData = require('../controller/getUserData');
// const getData = require('../model/db.getUser');

router.get('/get-user/:id',getData.getQueryForDb);          //API called users

module.exports = router;