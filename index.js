const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>Hello, World!</h1></body></html>");
})

server.listen(2000,"localhost",() => {
    console.log("Server running at http://localhost:2000");
})