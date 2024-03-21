const notFound = (res) => {
  res.writeHead(404, { "Content-type": "application/json" });
  res.write(JSON.stringify({ message: "Not Found!" }));
  res.end();
};

const ErrorHandler = {
  notFound,
};
module.exports = ErrorHandler;
