var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = ' ';
var localHost = false;
if (localHost) {
  url = 'http://localhost:3030';
}
else {
  url = 'http://192.168.1.5:3030';
}
/* GET home page. */
router.post('/login', function (req, res, next) {
  var user = req.body.user;
  var pass = req.body.pass;
  if (user === 'Lillo' && pass === '1234') {
    res.redirect(url + '/home/index.html');
  } else {
    res.write("Mi dispiace ma non sei tu");
    res.end();
  }
});

router.use(function (req, res, next) {
  res.sendFile('notFound.html', { root: './public' })
});

module.exports = router;




