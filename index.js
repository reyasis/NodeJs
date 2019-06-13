// const express = require('express')
// const app = express()
// app.get('/', (req, res) => res.send('NodeJs app in Gitlab'))
// app.listen(4000, () => console.log('Example app listening on port 200!'))

var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
  server.close();
};