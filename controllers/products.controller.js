const ProductModel = require("../model/product.model");
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
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const product = { ...JSON.parse(body) };
      const result = await productsModel.create(product);
      res.writeHead(201, { "content-type": "application/json" });
      res.write(JSON.stringify(result), "sad");
      res.end();
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
const update = async (req, res) => {
  try {
    let body = "";
    const id = req.url.split("/")[3];
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    const product = await productsModel.findById(id);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(
        JSON.stringify({ message: "Not found any products with that id" })
      );
      res.end();
    }
    req.on("end", async () => {
      const parsedBody = { ...JSON.parse(body) };
      if (!product) {
        res.writeHead(404, { "content-type": "application/json" });
        res.write(
          JSON.stringify({ message: "Not found any products with that id" })
        );
        res.end();
      } else {
        const result = await ProductModel.update(id, parsedBody);
        res.writeHead(201, { "content-type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
const remove = async (req, res) => {
  const id = req.url.split("/")[3];
  const found = await ProductModel.findById(id);
  if (!found) {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(
      JSON.stringify({ message: "Not found any products with that id" })
    );
    res.end();
  } else {
    const result = await ProductModel.remove(id);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(result));
    res.end();
  }
};

const ProductsController = {
  getAllProducts,
  getById,
  create,
  update,
  remove,
};

module.exports = ProductsController;
