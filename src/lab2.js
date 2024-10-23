/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  const { name, age } = req.body;

  res.send(`Received POST request. Name: ${name}, Age: ${age}`);
});

app.delete("/delete", (req, res) => {
  console.log(req.body);

  const { name, age } = req.body;

  res.send(`Received POST request. Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
