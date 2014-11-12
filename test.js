//get this at https://www.youtube.com/watch?v=QseHOX-5nJQ

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app=express();

var todoItems=[{id:1,desc:'foo'},{id:2,desc:'bar'}];

//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware

app.use(bodyParser());

//define routes

app.get('/', function (req, res){
	res.render('index',{
		title: 'My Test App',
		items: todoItems
	});
});
app.post('/add', function (req, res){
	var newItem = req.body.newItem;
	todoItems.push({id:todoItems.lenght+1,
		desc: newItem});
	res.redirect('/');
	
});
app.listen(1337, function(){
	console.log('Ready on port 1337');
});