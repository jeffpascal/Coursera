var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

//chaining the dish router to the app for the /dishes url
app.use(morgan('dev'));
app.use('/dishes', dishRouter.dishRouter);

//chaining the promo router to the app for the /promotions url
app.use('/promotions', promoRouter.promoRouter);

//chaining the leader router to the app for the /promotions url
app.use('/leadership', leaderRouter.leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});