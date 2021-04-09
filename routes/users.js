'use strict';

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    test: 'Hello users!',
  });
});

module.exports = router;
