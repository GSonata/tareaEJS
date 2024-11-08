var express = require('express');
var router = express.Router();
var funciones = require("../data/dataprovider.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  const allPosts = funciones.getAllPosts();
  res.render('index', { title: 'RetroBlog' , itemP: allPosts});
});

router.get('/entrada/:id',function(req,res){
  const target = funciones.getPostById(req.params.id)
  res.render("entrada",{head_title: target.title + "." , item: target});
});

module.exports = router;
