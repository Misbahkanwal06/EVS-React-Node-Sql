
const dbSql = require('../dbs');
const handleResponse = require("../utils");


const getUserPerm = async (userObj, currentUrl) => {
    try {
        // console.log("Get User Perm");
        // console.log(userObj, currentUrl);
        // console.log(userObj.roleid);
        let { roleid } = userObj;
        const query = `
                      SELECT p.routes 
                        FROM role r 
                         JOIN rolepermission rp ON rp.role_id = r.roleId
                       JOIN permission p ON p.id = rp.permission_id
                       WHERE roleId = ${roleid}
                    `;
        const result = [] = await dbSql.execute(query);
        // console.log(result[0]);
        const res = result && result[0].filter((ele) => `/api/v2/students${ele.routes}` === currentUrl);
        let resp = res.length > 0 ? true  : false;
        // if(resp){
        // }
        if (!resp) throw "requested routes doesn't have a permission"
    } catch (error) {

        console.log(error);
        return error;
    }
}

module.exports = { getUserPerm };
