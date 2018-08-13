const validate = require('./middleware/validate');
const routes = require('./routes')
const express = require('express');
const processImage = require('express-processimage');
const app = express();

app.use(express.json());
app.use('./middleware/auths', validate);
app.use(processImage('public'));
app.use(express.static('public'));
app.use('/', routes);

app.listen('3000');
module.exports.app = app;