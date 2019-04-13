var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.post('/login', function (req, res, next) {
  //fs.readFile('index.html', function (err, data) {
  //res.writeHead(200, { 'Content-Type': 'text/html' });
  var user = req.body.user;
  var pass = req.body.pass;
  if (user === 'Lillo' && pass === '1234') {
    res.redirect('http://localhost:3030/home/index.html');
  } else {
    res.write("Mi dispiace ma non sei tu");
    res.end();
  }
});

router.use(function (req, res, next) {
  res.sendFile('notFound.html', { root: './public' })
});

module.exports = router;
