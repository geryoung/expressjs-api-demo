var express = require('express');
var app = express();

var routerA = express.Router();
routerA.use('', function(req, res, next) {
  // res.end();
  res.json({aa: 'aa'});
});

app.use('/testa', routerA);

app.listen(3000);

module.exports = app;