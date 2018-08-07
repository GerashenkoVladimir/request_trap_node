const express = require('express');
const { routes } = require('./config/routes');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/request_trap');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("succesfull connection");
});

routes.forEach(function (route) {
    app[route.method](route.path, route.handler);
});


app.listen(3000, function () {
    console.log('Request trap app listening on port 3000!');
});
