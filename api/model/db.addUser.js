const sql = require('./db');

const create = async({firstname, lastname, address, city})=>{
    try{
        sql.connect();
        const data = await sql.query(
            `INSERT INTO "users" ("firstname", "lastname","address","city")
            VALUES ($1, $2, $3, $4)`,[firstname, lastname, address, city]
            );
            console.log("Users Added");
            return true;
    }
    catch(error){
        console.error(error.stack);
    }
}
module.exports = {
    create                          //SQL connection and query writing
}