"use strict";

const express = require("express");
const path = require('path');
/*eslint-disable */
const favicon = require('serve-favicon');
/*eslint-enable */
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require("./routes/index");
const apiRoutes = require("./routes/api");

// Set port for local development
const app = express();

// View engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var dir = "../public";
if (process.env.PORT) {
  dir = "public";
}
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, dir + '/images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, dir)));

app.use('/', routes);
app.use('/api',apiRoutes);

app.listen(process.env.PORT||5001,()=>{
  console.log(`Zooop is now running on port ${process.env.PORT||5001}`);
});

module.exports = app;
