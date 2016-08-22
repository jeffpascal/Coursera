
var express = require('express');
var bodyParser = require('body-parser');

//creating the promoRouter
var promoRouter = express.Router();

//initialising the exports.  for it to be a module
exports.promoRouter = promoRouter;

//use the parser
promoRouter.use(bodyParser.json());

//chaining .all to the dishrouter (no need to specify the url)
promoRouter.route('/')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
//no more url parameters
.get(function(req,res,next){
    res.end('Will send all the promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);    
})
//delete is the last one so we put semicolon
.delete(function(req, res, next){
    res.end('Deleting all promotions');
});

//routing if followed by a dishid
promoRouter.route('/:dishId')
.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})

.get(function(req,res,next){
    res.end('Will send details of the promotion: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
    res.write('Updating the promotion: ' + req.params.dishId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
    res.end('Deleting promotion: ' + req.params.dishId);
});

