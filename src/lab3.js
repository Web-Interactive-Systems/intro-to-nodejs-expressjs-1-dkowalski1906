/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create a server that serves a static folder: `public`
 - If an url is not found, the server should serve 'Page not found'
 */

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
const staticMiddleWare = express.static("public");
app.use(staticMiddleWare);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
