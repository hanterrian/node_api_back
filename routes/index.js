var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    test: 'Hello world!',
  });
});
router.get('/new', function(req, res, next) {
  res.json({
    test: 'New response',
  });
});

module.exports = router;
