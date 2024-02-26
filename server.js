


const path = require('path');
const dbSql = require('./dbs');
const mainRoutes = require('./mainRoutes');
const handleroutes =require("./security/preHandler")

// const cors = require('fastify-cors');
// fastify.register(cors);


// FASTIFY
const fastify = require('fastify')({
    logger: true
});
fastify.register(require('@fastify/cors'))


//ENV
require('dotenv').config({
    path:path.join(__dirname,`.env.${process.env.NODE_ENV}`)
});
fastify.addHook("preHandler",handleroutes);


// END POINT
fastify.register(mainRoutes, { prefix: "/api/v2" });

//handleroutes(fastify);



//SQL DATABASE:
const startfastifyService = async () => {
    try {
        await fastify.listen({ port: process.env.PORT });
        console.log(`server is running on ${process.env.PORT} sqldatabase`);
    } catch (e) {
        console.log(e);
        fastify.log.error(e);
        process.exit(1);
    }
};
startfastifyService();



// fastify.register(cors, {
//     origin: ['http://localhost:3005'], 
//     methods: ['GET', 'POST'], 
//     // allowedHeaders: ['Content-Type'], 
//     // credentials: true 
//   });