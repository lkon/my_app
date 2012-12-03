var http = require("http"); // подключает http-модуль, который поставляется вместе с Node.js
							// и делает его доступным через переменную http.

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();  // вызывается при каждом ответе
}).listen(8080);