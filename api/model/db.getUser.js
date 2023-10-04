
const sql = require('./db');
const getQuery = async(req, res)=>{
    try{
        sql.connect();                      // setting connection to get users
    }
    catch(error){
        console.error(error.stack);
    }
}
module.exports = {
    getQuery
}