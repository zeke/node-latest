var express = require("express");
var logfmt = require('logfmt');

var app = express();

app.configure(function() {
  app.disable("x-powered-by");
  app.use('/', express["static"]("public"));
  app.use(logfmt.requestLogger());
});

app.listen(process.env.PORT || 5000)