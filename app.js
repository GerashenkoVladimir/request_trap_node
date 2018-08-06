const express = require('express');
const routes = require('./config/routes').routes;
const app = express();

routes.forEach(function (route) {
    app[route.method](route.path, route.handler);
});



app.listen(3000, function () {
    console.log('Request trap app listening on port 3000!');
});
