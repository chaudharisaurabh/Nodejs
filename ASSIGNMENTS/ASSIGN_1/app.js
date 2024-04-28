const http =require('http');
const fs =require('fs');

const server =http.createServer((request,response)=>{
    const url =request.url;
    const method =request.method;

    if(url === '/'){
        response.write('<html>');
        response.write('<head><title>Enter Message </title></head>');
        response.write('<body><form action="/create-user" method="POST"><input type="text" name="UserName"><button type="submit" > Submit</button></input></form></body>');
        response.write('</html>');
        return response.end();
    }

    if(url === '/users'  ){
        response.write('<html>');
        response.write('<head><title>Enter Message </title></head>');
        response.write('<body><ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul></body>');
        response.write('</html>');
        return response.end();
    }

    if(url ==='/create-user' && method === 'POST'){
        const body = [];
        request.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);

        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const users = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', users, err => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();

            });
        });
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title> My first assignment </title></head>');
    response.write('<body><h1> Hello! My first assignment!!!</body>');
    response.write('</html>');
    response.end();
});

server.listen(3000,()=>{
    console.log("Server listening at port 3000");
})


