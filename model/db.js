//Created an ordinary JS array
//to serve as db so that we don't have to handle
//SQL connections and such

//exports.students tells nodejs that we want
//this object to be seen from outside of this file ie. global
var students = exports.students = [
{name :'Alex', id:1212 , message: 'Hi!!'},
{name :'Bob', id:999 , message: 'BYe'}
];