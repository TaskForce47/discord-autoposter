var express = require("express");
// var favicon = require("serve-favicon");
var logger = require("morgan");

// Init
var app = express();
//
// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));


// Routes
var index = require("./routes/index");

// Routing
app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

module.exports = app;
