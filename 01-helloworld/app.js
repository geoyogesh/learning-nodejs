var http=require('http');

http.createServer(function(request, response){
	response.writeHead({
		'Content-Type':'text/plain'
	});
	response.end('hello world');
}).listen(3000);

//npm install -g nodemon
//nodemon app.js

 //node app.js --debug
 //node-debug app.js
 //node-inspector