
const sql = require('./db');

const getQuery = async(req, res)=>{
    try{
        sql.connect();

    }
    catch(error){
        console.error(error.stack);
    }
}
module.exports = {
    getQuery
}