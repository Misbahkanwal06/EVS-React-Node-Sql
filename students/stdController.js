

const dbSql = require('../dbs');
const { createHash, comparePass, handleResponse } = require('../utils');
const jwt = require("jsonwebtoken");
const { createToken, tokenVerification } = require('../security/jwtToken');

// const apiResp=(code=200,msg="test",status)=>{return {code:code,msg:msg,status:status}}
// console.log(apiResp(400,"Error"));

const stdCreate = async (req, res) => {
    // console.log(req.body); 
    try {
        const { name, email, password } = req.body;
        const encryptedPass = password && await createHash(password);
        if (encryptedPass) {
            const query = "INSERT INTO students(`name`,`email`,`password`)VALUES(?,?,?)";
            const values = [name, email, encryptedPass];
            // console.log(values); 
            const dbresult = await dbSql.execute(query, values);
            res.send(handleResponse(201, "User registered successfully"), dbresult);
        }
    } catch (error) {
        res.send(handleResponse(500, "Error in creating user"))
    }
}


const stdLogin = async (req, res) => {
    console.log("req.body", req.body);
    const { email, password } = req.body;
    try {
        const query = "SELECT * FROM students WHERE email = ? ";
        const values = [email];
        const [dbresult] = await dbSql.execute(query, values);
        console.log("dbresult", dbresult);
        if (dbresult.length === 0) {
            res.send(handleResponse(401, "User not found"));
        }
        const user = dbresult[0];
        console.log("user", user);
        const bcryptRes = await comparePass(password, user.password)
        console.log(bcryptRes);
        if (!bcryptRes) {
            res.send(handleResponse("Invalid Password"));
        } else {
            const token = await createToken(user);
            console.log(token);
            if (token) {
                const updateQuery = "UPDATE students SET token = ? WHERE id = ?";
                const updateValues = [token, user.id];
                await dbSql.execute(updateQuery, updateValues);
                // getUserPerm(token, currentUrl);
                ///     
                let verifyToken = jwt.verify(token, "shhhhh");
                console.log("verifyToken", verifyToken);
                let { roleid } = verifyToken;
                const queryPerm = `
            SELECT p.routes
              FROM role r 
               JOIN rolepermission rp ON rp.role_id = r.roleId
             JOIN permission p ON p.id = rp.permission_id
             WHERE roleId = ${roleid}
          `;
                const userPerm = [] = await dbSql.execute(queryPerm);
                // console.log("userPerm", userPerm);
                // getUserPerm(verifyToken, currentUrl);
                console.log("userPerm", userPerm[0]);
                /////////
                res.send(handleResponse(200, "Successful login", { token: token, permissions: userPerm[0] }));
            }
        }
    } catch (error) {
        res.send(handleResponse(500, "Error logging in"));
    }
}

const verifyToken = async (req, res) => {
    console.log(req.headers);
    const { auth } = req.headers;
    console.log("auth", auth);
    try {
        let authResp = auth && await tokenVerification(auth);
        console.log(authResp);
        if (authResp.isValid) return authResp.message
        else if (!authResp.isValid) throw authResp.message;
    } catch (error) {
        res.send(error);
    }
}


// const stdDelete = async (req, res) => {
//     console.log(req.params.id);
//     const {id} = req.params;
//     const queryPerm = `
//     DELETE FROM students WHERE id=${id}; 
//   `; 
//   const userPerm =[] = await dbSql.execute(queryPerm);
//   console.log(userPerm);
//     // const objid = new ObjectId(req.params.id);
//     // const userRes = await stuModel.deleteOne({ _id: objid });
//     return userRes;
// } 


module.exports = { stdCreate, stdLogin, verifyToken };













