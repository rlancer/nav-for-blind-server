import express from 'express';
import bodyParser from 'body-parser';
import  http from 'http';
import path  from 'path';
import NodeGeocoder from 'node-geocoder';



global.app = express();

global.geocoder = NodeGeocoder({
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBAKY4lG_NDhSbAgV1ibLGeJvRpO6ZuW6I',
  formatter: null         // 'gpx', 'string', ...
});


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

require('./lib/routes');

app.listen(process.env.PORT || 3006, function () {
  console.log('LISTENTING ON ', process.env.PORT || 3006);
});


