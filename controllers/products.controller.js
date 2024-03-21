const products = require("../data/product");

const getProducts = async (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
};

const ProductsController = {
  getProducts,
};

module.exports = ProductsController;
