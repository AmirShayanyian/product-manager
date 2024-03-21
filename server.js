const http = require("http");
const products = require("./data/product");
const ProductsController = require("./controllers/products.controller");

const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/api/product") {
    ProductsController.getProducts(req, res);
  } else {
    res.end("Not found.");
  }
});

server.listen(PORT);
console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
