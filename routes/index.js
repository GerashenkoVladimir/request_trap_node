const router = require('express').Router();
const RequestTrapsController = require('../controllers/RequestTrapsController');


router.get('/', RequestTrapsController.helloAction);
router.get('/:trapId/requests', RequestTrapsController.requestsShowAction);
router.get('/*', RequestTrapsController.requestTrapAction);
router.all('*', (req, resp) => resp.status(404).send('Not found'));

exports.router = router;
