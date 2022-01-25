var http = require("http");
const PORT = process.env.PORT || 8080;
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World #noscope360\n');
}).listen(PORT);

console.log('Sever running at $ { PORT }');