const http = require("http");
const errorHandler = require("./controllers/errorHandler.controller");
const ProductsController = require("./controllers/products.controller");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const pattern = /\/api\/products\/[0-9]+/;
  if (req.url === "/api/products") {
    ProductsController.getProducts(req, res);
  } else if (req.url.match(pattern)) {
    ProductsController.getProductById(req, res);
  } else {
    errorHandler.notFound(res);
  }
});

server.listen(PORT);
console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
