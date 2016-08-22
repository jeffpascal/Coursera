//express server (advanced features)
// try creating a REST based server
var express = require('express');
var morgan = require('morgan');
//this is used to parse the data that comes in the request body and turns it into JS object
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

//if the body has JSON data, parse it into Java script objects
app.use(bodyParser.json());


app.all('/dishes', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //before i finish this, i keep going
    next();
});

app.get('/dishes', function(req,res,next){
    res.end('Will send all the dishes to you!');
});

//add the new dish
//req.body contains the JS object, and can be accessed as below.
//information is already available in req.body object
app.post('/dishes', function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

//not calling next anymore, so data will be sent to the client. unlike in app.all.
app.delete('/dishes', function(req, res, next){
    res.end('Deleting all dishes');
});

//req.params.dishId will contain the details in dishId from the link
app.get('/dishes/:dishId', function(req,res,next){
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

//json data in this case will have a  'name' and a  'description'
app.put('/dishes/:dishId', function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', function(req, res, next){
    res.end('Deleting dish: ' + req.params.dishId);
});

//server will keep serving html items
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});