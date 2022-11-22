// File system for folders
const fs = require("fs");

// // create folder
// fs.mkdir("tutorial", (err) => {
//   if (err) console.log(err);
//   else console.log("Folder successfully created");
// });

// // delete folder
// fs.rmdir("tutorial", (err) => {
//   if (err) console.log(err);
//   else console.log("Folder deleted succesfully");
// });

// // create folder and file inside
// fs.mkdir("tutorial", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.writeFile("./tutorial/example.txt", "123", (err) => {
//       if (err) console.log(err);
//       else console.log("Succesfully created folder and file");
//     });
//   }
// });

// // delete file and then folder (has to be in that order)
// fs.unlink("./tutorial/example.txt", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.rmdir("tutorial", (err) => {
//       if (err) console.log(err);
//       else console.log("File and folder deleted successfully");
//     });
//   }
// });

// // read files
// fs.readdir("example", (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

// read and delete files
fs.readdir("example", (err, files) => {
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink("./example/" + file, (err) => {
        if (err) console.log(err);
        else console.log("File deleted successfully");
      });
    }
  }
});
