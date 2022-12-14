// File system module
const fs = require("fs");

// // create a file
// fs.writeFile("example.txt", "This is an example", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("File successfully created");
//     // read de content of the file
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) console.log(err);
//       else console.log(file);
//     });
//   }
// });

// // rename a file
// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully renamed the file");
// });

// // append data to file
// fs.appendFile("example2.txt", "Some data being appended", (err) => {
//   if (err) console.log(err);
//   else console.log("Successfully appended data to file");
// });

// delete file
fs.unlink("example2.txt", (err) => {
  if (err) console.log(err);
  else console.log("Successfully deleted file");
});
