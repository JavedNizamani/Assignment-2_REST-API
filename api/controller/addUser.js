const registerUser = require('../model/db.addUser');

const createUser = async (req, res)=>{
    try{
        console.log(req.body);
        const {firstname, lastname, address, city} = req.body;
            await registerUser.create({
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city
        });
            res.send(req.body);

    }                                               // Posting Data to data base table
    catch(error){
        console.error(error.stack);
    }
}

module.exports = {
    createUser
}