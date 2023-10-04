const registerUser = require('../model/db.addUser');

const createUser = async (res, req)=>{
    try{
        console.log(res.body);
        const {firstname, lastname, address, city} = res.body;
        const req = await registerUser.create({
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city
        });
    }
    catch(error){
        console.error(error.stack);
    }
}

module.exports = {
    createUser
}