const http = require("http");
const errorHandler = require("./controllers/errorHandler.controller");
const ProductsController = require("./controllers/products.controller");
const products = require("./data/product.json");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const pattern = /\/api\/products\/[0-9]+/;
  if (req.url === "/api/products" && req.method == "GET") {
    console.log("get all ");
    ProductsController.getAllProducts(req, res);
    // res.writeHead(200, { "content-type": "application/json" });
    // res.write(JSON.stringify(products));
    // res.end();
  }
  // if (req.url === "/api/products" && req.method == "POST") {
  //   ProductsController.create(req, res);
  // }
  else if (req.url.match(pattern) && req.method == "GET") {
    ProductsController.getById(req, res);
  } else {
    errorHandler.notFound(res);
  }
});

server.listen(PORT);
console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
