var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoHelper.get('posts').then(results =>{
    res.status(200).json(results);
  })

});

/* create a new post*/

router.post('/', function(req, res){
  MongoHelper.create('posts', req.body).then(results =>{
    res.status(201).json('New post created');
  })
})

module.exports = router;
