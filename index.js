const http = require('http');
const fs = require('fs');

// http://localhost:5500/index.js;
http.createServer(handleRequest).listen(5500);

function handleRequest(request, response) {
  try {
    response.end(fs.readFileSync(__dirname + request.url));
  } catch {
    response.end('not found');
  }
}
