function errorHandler(err, req, res, next) {
  console.error(err.message);
	res.status(400).json(err);
}

module.exports = errorHandler;