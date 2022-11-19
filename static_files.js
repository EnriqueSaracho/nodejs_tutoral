const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    const readStream = fs.createReadStream('')
}).listen(3000);
