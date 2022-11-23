// HTTP Post Request with Express and Body Parser Module
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static")));
app.unsubscribe(bodyParser.urlencoded({ extender: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  // database work here
  res.send("successfully posted data");
});

app.listen(3000);
