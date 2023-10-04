const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./api/routes/add-user');

app.use(bodyParser.json());
app.use('/admin',adminRoutes);

module.exports = app;