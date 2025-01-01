const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation asynchronously
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 100); // Simulate long operation; adjust time as needed
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});