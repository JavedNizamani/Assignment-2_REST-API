const express = require('express');
const router = express.Router();
const addUser = require('../controller/addUser');

router.post('/add-users', addUser.createUser);          //API called users

router.get('/add-users/:userId',(req, res, next)=>{
    const id = req.params.userId;
        if(id === 'special'){
            res.status(200).json({
                message: 'You have special Id',
                id: id
            });
        }else{
            res.status(200).json({
                message: 'You Passed Id',
                id: id
            });
        }
});

module.exports = router;