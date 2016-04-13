'use strict';

var app = require('./app'),
    models = require('../models/database.js');

app.set('port', process.env.PORT || 8000);

models.sequelize.sync().then(function() {
  app.listen(app.get('port'), function() {
    console.log("Server listening on port", app.get('port'));
  });
})
