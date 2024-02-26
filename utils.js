
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = async (myPlaintextPassword) => {
    const hashPass = await bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log("hashpass", hashPass);
    return hashPass;
}

const comparePass = async (password, hash) => {
    const comparedpass = await bcrypt.compareSync(password, hash);
    return comparedpass;
}

const handleResponse = (
    statusCode = 500,
    send = "Internal Server error",
    obj,
    validate,
) => {
    return {
        statusCode: statusCode,
        send:send,
        obj:obj,
        validate:validate
    }
}
module.exports = { createHash, comparePass, handleResponse };