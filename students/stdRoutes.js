
    const stdController = require("./stdController");
    const stdRoutes = (fastify,options,done)=>{
        fastify.post('/create',stdController.stdCreate);
        fastify.post('/login',stdController.stdLogin);
        fastify.get('/verify',stdController.verifyToken);
        // fastify.delete('/delete/:id',stdController.stdDelete);
        done();
    }

    module.exports = stdRoutes;
