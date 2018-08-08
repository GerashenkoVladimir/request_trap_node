const router = require('express').Router();
const RequestTrapsController = require('../controllers/RequestTrapsController');


router.get('/', RequestTrapsController.helloAction);
router.get('/:trapId/requests', RequestTrapsController.requestsShowAction);
router.get('/*', RequestTrapsController.requestTrapAction);

exports.router = router;
