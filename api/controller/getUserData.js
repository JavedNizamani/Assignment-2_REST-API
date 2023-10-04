const usersDb = require('../model/db.getUser');
const sql = require('../model/db');

 getQueryForDb = async (req,res)=>{
    let q = `select * from users where id=${req.params.id}`;
    
    await sql.query(q, (err, result)=>{
        if(!err){                                           // this fetch data from database table users
            console.log(result.rows);
            res.send(result.rows);
        }
        else if(err){
            console.error(err.stack);
        }
    });
}
module.exports = {
    getQueryForDb
}
