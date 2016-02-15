"use strict";

const express = require("express");
const path = require('path');
/*eslint-disable */
const favicon = require('serve-favicon');
/*eslint-enable */
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require("./app/routes/index");
const apiRoutes = require("./app/routes/api");

// Set port for local development
const app = express();

app.set('port', (process.env.PORT || 5001));

// View engine setup
app.set('views', path.join(__dirname,'app/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use('/', routes);
app.use('/api',apiRoutes);

app.listen(app.get('port')||5001,()=>{
  console.log(`Zooop is now running on port ${app.get('port')||5001}`);
});

module.exports = app;
