//get express
var express = require('express');
//get http
var http = require("http");
//make an app
var app = express();

//make a roude

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static("./MyPortfolio"));

//start server on port 2050

http.createServer(app).listen(2050);

// send a message
console.log('Hey, it works!')
