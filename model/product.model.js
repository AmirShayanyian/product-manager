const products = require("../data/product");
async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}
async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(products.find((product) => product.id == id));
  });
}
