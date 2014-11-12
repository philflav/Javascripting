//get this at https://www.youtube.com/watch?v=QseHOX-5nJQ

var express = require('express');
var path = require('path');
var app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/', function (req, res){
	res.render('index');
});

app.listen(1337, function(){
	console.log('Ready on port 1337');
});