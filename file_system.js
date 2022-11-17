const fs = require("fs");

// create a file
fs.writeFile("example.txt", "This is an example", (err) => {
  if (err) console.log(err);
  else {
    console.log("File successfully created");
    // read de content of the file
    fs.readFile("example.txt", "utf8", (err, file) => {
      if (err) console.log(err);
      else console.log(file);
    });
  }
});
