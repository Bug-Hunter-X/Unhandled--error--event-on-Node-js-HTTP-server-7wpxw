const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle the 'error' event
server.on('error', (err) => {
  console.error('Server encountered an error:', err);
  // Add appropriate error handling logic here, such as attempting to restart the server or logging to a file.
});

server.listen(8080);

console.log('Server is running on port 8080');