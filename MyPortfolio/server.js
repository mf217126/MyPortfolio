//get express
var express = require('express');
//make an app
var app = express();

//make a roude

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

//start server on port 2050

app.listen(2050);

// send a message
console.log('Hey, it works!')
