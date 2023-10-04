const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./api/routes/add-user');
const adminGetUser = require('./api/routes/get-user');

app.use(bodyParser.json());
app.use('/admin',adminRoutes);
app.use('/admin',adminGetUser);

module.exports = app;