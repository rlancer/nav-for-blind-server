const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path');


var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


function logErrors(err, req, res, next) {
  next(err);
}
app.use(logErrors);

app.use(function (req, res, next) {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }
  catch (err) {
    console.error(err);
  }
});

app.get('/poi', function (req, res) {
  // todo for a given point return whats around
});

app.listen(process.env.PORT || 3006, function () {
  console.log('LISTENTING ON ', process.env.PORT || 3006);
});


