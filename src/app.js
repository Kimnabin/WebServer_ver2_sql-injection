const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const auth = require('./routers/index');
// set the view engine to ejs
require("../src/dbs/init.mongodb");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', auth);

;

module.exports = app;