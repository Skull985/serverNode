var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

module.exports = router;
