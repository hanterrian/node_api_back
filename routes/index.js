'use strict';

let express = require('express');
let router = express.Router();

const db = require('./../models');
const User = db.User;

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = User.findAll();
  console.log(data);
  res.json(data);
});
router.get('/new', function(req, res, next) {
  res.json({
    test: 'New response',
  });
});

module.exports = router;
