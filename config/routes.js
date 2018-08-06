const {HelloWorldController} = require('../controllers/HelloWorldController');

const routes = [
    {
        method: 'get',
        path: '/',
        handler: HelloWorldController.helloAction
    }
];

exports.routes = routes;
