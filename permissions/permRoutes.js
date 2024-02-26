
const permController = require("./permController");

const permRoutes = (fastify,options,done)=>{
    fastify.post('/create',permController.permCreate);
    done();
}
module.exports = permRoutes;