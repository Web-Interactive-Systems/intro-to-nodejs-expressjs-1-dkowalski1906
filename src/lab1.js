const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/") {
    filePath = path.join(__dirname, "static", "html", "index.html");

    const content = fs.readFileSync(filePath, "utf8");
    const extname = path.extname(filePath);
    let contentType = "text/html";
    res.end(content);
  }

  else if (req.url === "/js/app.js") {
    console.log("serve app js")
    const contentJS = fs.readFileSync("src/static/js/app.js");
    res.end(contentJS)
  }
  
  else {
    res.writeHead(404);
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
