var express = require('express');
var app = express.Router();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
//app.use('/usermap', require('./userMap.js'));

// app.use('/welcome', require('./app/routes/welcome'));

module.exports = app;
