const productsModel = require("../model/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log("error: ", error);
  }
};

const getById = async (req, res) => {
  try {
    const id = req.url.split("/")[3];
    const product = await productsModel.findById(id);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(
        JSON.stringify({ message: "Not found any products with that id" })
      );
      res.end();
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

const create = async (req, res) => {
  try {
    await productsModel.create({
      id: 11,
      name: "Iphone 12",
      description: "This is an iphone phone which is very good.",
      price: 12.99,
    });
    res.writeHead(201, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "Product created successfully!" }));
    res.end();
  } catch (error) {
    console.log("error: ", error);
  }
};

const ProductsController = {
  getAllProducts,
  getById,
  create,
};

module.exports = ProductsController;
