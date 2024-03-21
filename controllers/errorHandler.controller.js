const notFound = (res) => {
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("Not Found!");
  res.end();
};

const ErrorHandler = {
  notFound,
};
module.exports = ErrorHandler;
