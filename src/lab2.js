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

let data = [
  {
  "name": "Jean Dupont",
  "age": 50,
  "id": 1
  },
  {
  "name": "Damien Kowalski",
  "age": 21,
  "id": 2
  },
  {
  "name": "Valentin Kowalski",
  "age": 18,
  "id": 3
  },
]

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get", (req, res) => {
  const { name, age, id } = req.body;
  data.push(
    {
      "name": name,
      "age": age,
      "id": id
    }
  )
  res.send("Hello World!");
});

app.post("/post", (req, res) => {

  const { name, age, id } = req.body;

  const newData = {
      "name": name,
      "age": age,
      "id": id
  }

  data.push(newData)

  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
