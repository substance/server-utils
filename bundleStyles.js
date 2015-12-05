var sass = require('node-sass');

var renderSass = function(path, map, cb) {
  sass.render({
    file: path,
    sourceMap: map,
    outFile: 'app.css',
  }, cb);
};

var bundleStyles = function(path, map) {
  if (!map) map = false;
  return function(req, res, next) {
    renderSass(path, function(err, result) {
      if (err) return next(err);
      res.set('Content-Type', 'text/css');
      if (map) {
        res.send(result.map);
      } else {
        res.send(result.css);
      }
    });
  };
};

module.exports = bundleStyles;