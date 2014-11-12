//get this at https://www.youtube.com/watch?v=QseHOX-5nJQ

var express = require('express');

var app=express();

app.get('/', function (req, res){
	res.send('Hello Express!');
});

app.listen(1337, function(){
	console.log('Ready on port 1337');
});