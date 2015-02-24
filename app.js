//Tells NodeJs that we use Express package
var express = require('express');

//Create an instance of express application
var app = express();

//setting up the view engine
app.set('view engine', 'ejs');
//Where express should look for views
app.set('views', __dirname+'/views');

//tells application that we want to use this file
var db = require('./model/db.js');

//shorthand so that we don't need to type it everytime
studs = db.students;

//Every time application receives a request to show
//render a view called 'index' by plugging in items from the set

app.get('/', function(req, res){
     res.render('index', {title: 'List of Students',
         students: studs});
});


//Bind application to port 3000
//and print a message if successful
app.listen(3000, function(){
    console.log("app is running on port 3000");
});