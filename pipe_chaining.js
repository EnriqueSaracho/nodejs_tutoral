// Pipe chaining
const fs = require("fs");
const zlib = require("zlib");
// const gzip = zlib.createGzip();
const gunzip = zlib.createGzip();
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("./example2.txt.gz");
// readStream.pipe(gzip).pipe(writeStream);
const readStream = fs.createReadStream("./example2.txt.gz");
const writeStream = fs.createWriteStream("uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream);
