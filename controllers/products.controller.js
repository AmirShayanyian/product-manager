const productsModel = require("../model/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log("error: ", error);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.url.split("/")[3];
    const product = await productsModel.findById(id);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {
    console.log("error: ", error);
  }
};

const ProductsController = {
  getProducts,
  getProductById,
};

module.exports = ProductsController;
