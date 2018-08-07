const {RequestTrapsController} = require('../controllers/RequestTrapsController');

const routes = [
    {
        method: 'get',
        path: '/',
        handler: RequestTrapsController.helloAction
    },
    {
        method: 'get',
        path: '/:trap_id/requests',
        handler: RequestTrapsController.requestsShowAction
    },
    {
        method: 'get',
        path: '/*',
        handler: RequestTrapsController.requestTrapAction
    }
];

exports.routes = routes;
