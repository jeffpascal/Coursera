var express = require('express');
//morgan is used to log the data on the server side
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

//use morgan as middleware
//'dev' = preformatted log
app.use(morgan('dev'));

//use the middleware .static
//public folder contains all static files
//__dirname makes it so you can use the app anywhere
app.use(express.static(__dirname + '/public'));

//startup the server
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});