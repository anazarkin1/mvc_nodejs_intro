//Tells NodeJs that we use Express package
var express = require('express');

//Create an instance of express application
var app = express();

//tells application that we want to use this file
var db = require('./model/db.js');

//shorthand so that we don't need to type it everytime
studs = db.students;

//Every time application receives a request to show
//root of the application, send this small set of data
app.get('/', function(req, res){
    res.send('name:      stud_id:</br>'+studs[0]['name']+
    ' &emsp; '+studs[0]['id']+'</br>'+studs[1]['name']+
    ' &emsp; '+studs[1]['id']);
});


//Bind application to port 3000
//and print a message if successful
app.listen(3000, function(){
    console.log("app is running on port 3000");
});