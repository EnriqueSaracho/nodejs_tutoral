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

// create folder and file inside
fs.mkdir("tutorial", (err) => {
  if (err) console.log(err);
  else {
    fs.writeFile("./tutorial/example.txt", "123", (err) => {
      if (err) console.log(err);
      else console.log("Succesfully created folder and file");
    });
  }
});
