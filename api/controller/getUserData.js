const usersDb = require('../model/db.getUser');
const sql = require('../model/db');
 getQueryForDb = async (req,res)=>{
       
    await sql.query(`select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
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
