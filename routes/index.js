//tells application that we want to use this file
var db = require('../models/db.js');

//shorthand so that we don't need to type it everytime
studs = db.students;

exports.index = function(req, res){
     res.render('index', {title: 'List of Students',
         students: studs
})};