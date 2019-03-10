//server.js

var express = require('express');
app = express(),
  port = process.env.PORT || 5000;
bodyParser = require('body-parser');

const reqValidtor = require('request-validation');
const baseJoi = require('joi');
require('joi-add')(baseJoi);

//Validate the request
reqValidtor.options({ headers: { stripUnknown: false } });
reqValidtor.handler(function (err, req, res, next) {
  if (!err.isJoi) return next(err);

  const details = err.details[0];
  const message = (details.context.isExplicit || details.context.addLabel)
    ? details.message
    : 'Bad Request';
  res.status(400).json({
    status: 'error',
    message: message,
    full: err.message
  });
});

// Hnadle the express routes 
app.use(function (error, req, res, next) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.use(function (error, req, res, next) {
  res.status(500).send({ url: req.originalUrl + ' Internal server error 500' })
});

app.use('/user/', require( __dirname + '/api/user.routes'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port);

console.log('RESTful API server started on: ' + port);
