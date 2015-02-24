//Tells NodeJs that we use Express package
var express = require('express');

//Create an instance of express application
var app = express();

//Every time application receives a request to show
//root of the application, send this small set of data
app.get('/', function(req, res){
    res.send('name:     sid:    </br>'
        +'alex  1   </br>'
        +'bob   2   </br>');
});


//Bind application to port 3000
//and print a message if successful
app.listen(3000, function(){
    console.log("app is running on port 3000");
});