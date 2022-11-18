const fs = require("fs");

// read file
const readStream = fs.createReadStream("./example.txt", "utf8");
// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// write file
const writeStream = fs.createWriteStream("./example2.txt");
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// Do the same but with pipe
readStream.pipe(writeStream);
