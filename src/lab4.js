/**
 Todo Complete this app
 
 - Check the documentation of expressjs to serve a json response
 - Add an array of matches to the file `data/matchs.json`
 - Create an express server that serve the content of `data/matchs.json` as a json response
 */

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 5000;

app.get("/matches", (req, res) => {
  const filePath = path.join(__dirname, "data", "matchs.json");
  
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read the file" });
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

