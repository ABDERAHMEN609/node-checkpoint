

var fs = require("fs")
var http = require("http");
http.createServer(function (request, response) {
  

    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    
    

    response.end('Hello World\n');
    
 }).listen(8081);
 var data = fs.readFileSync("hello.txt")
    console.log(data.toString());

 console.log('Serveris  running  at http://127.0.0.1:8081/');

