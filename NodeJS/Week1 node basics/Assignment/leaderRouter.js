
var express = require('express');
var bodyParser = require('body-parser');

//creating the leaderRouter
var leaderRouter = express.Router();

//initialising the exports.  for it to be a module
exports.leaderRouter = leaderRouter;

//use the parser
leaderRouter.use(bodyParser.json());

//chaining .all to the leaderRouter (no need to specify the url)
leaderRouter.route('/')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
//no more url parameters
.get(function(req,res,next){
    res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
})
//delete is the last one so we put semicolon
.delete(function(req, res, next){
    res.end('Deleting all leaders');
});

//routing if followed by a dishid
leaderRouter.route('/:dishId')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})

.get(function(req,res,next){
    res.end('Will send details of the leader: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
    res.write('Updating the leader: ' + req.params.dishId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
    res.end('Deleting leader: ' + req.params.dishId);
});

