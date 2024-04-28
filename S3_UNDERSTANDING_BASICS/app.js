const http = require('http');
const routes =require('./routes.js');



const server = http.createServer(routes.handler);

server.listen(3000,()=>{
    console.log("Server listening at port 3000");
});