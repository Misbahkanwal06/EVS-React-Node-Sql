
const stdRoutes = require('./students/stdRoutes');

const mainRoutes = (fastify,options,done)=>{

    fastify.register(stdRoutes,{prefix :"/students"});
    done();
}

module.exports = mainRoutes;