var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userlist', function(req, res) { 
  var db = req.db;
  var collection = db.get('usersCollect');
  collection.find({},{},function(e, docs) {
    res.json(docs);
  });
});

module.exports = router;
