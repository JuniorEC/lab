var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userList', function(req, res) { 
  var db = req.db;
  var collection = db.get('usersCollect');
  collection.find({},{},function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

router.get('/novousuario', function(req, res) {
  res.render('newuser', {title: ' Adicionar usuário'});
});

router.post('/addusuario', function(req, res) {
  var db = req.db;
  console.log(req.body);
  
  var userName = req.body.userName;
  var email = req.body.email;

  var collection = db.get('usersCollect');

  collection.insert({
    "username" : userName,
    "email" : email
  }, function(err, doc) {
    if(err) {
      res.send("um erro ocorreu ao inserir"+req.body.username);
    }
    else {
      res.redirect("userlist");
    }
  });
});

module.exports = router;
