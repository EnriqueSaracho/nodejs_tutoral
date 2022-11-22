// Create http server
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world from nodejs");
    res.end();
  } else {
    res.write("using some other domain");
    res.end();
  }
});

server.listen("3000");

// On cmd write: node httpserver.js
// On browser write: localhost:3000
