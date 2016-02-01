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

// Set port for local development
const port = process.argv[2];
const app = express();

// View engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port||5001,()=>{
  console.log(`Zooop is now running on port ${port||5001}`);
});

module.exports = app;
