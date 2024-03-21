const http = require("http");
const products = require("./data/product");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(products));
});

server.listen(PORT);
console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
