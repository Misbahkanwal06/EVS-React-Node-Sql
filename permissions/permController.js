

const dbSql = require('../dbs2');

const permCreate = async (req, res) => {
    console.log(req.body);
    try {
        const {id,routes} = req.body;
         // return req.body;
    const query = "INSERT INTO permission(`id`,`routes`) VALUES(?,?)";
    const values = [id,routes];
   const permRes = await dbSql.execute(query, values);
    return permRes; 
    } catch (error) {
        console.error("Error in permCreate:", error);
    res.status(500).send("Error creating student");
    }
}
module.exports = { permCreate };


