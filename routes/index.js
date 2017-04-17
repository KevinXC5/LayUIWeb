var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
  console.log("1111");
});

module.exports = router;
