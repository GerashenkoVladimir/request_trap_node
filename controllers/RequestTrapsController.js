const {RequestTraps} = require('../models/RequestTraps');

class RequestTrapsController {
    static helloAction(req, resp) {
        resp.send("Hello world");
    }

    static requestTrapAction(req, resp) {
        const trap_id = req.url.split('?')[0].split('/')[1];
        const requestData = {
            method: req.method,
            requestUri: req.url,
            headers: req.headers,
            queryParams: req.query
        };
        RequestTraps
            .findOne({requestUri: trap_id})
            .then(result => {
                if (result){
                    result.children.push(requestData);
                    return result.save()
                } else {
                    return new RequestTraps({
                        requestUri: trap_id,
                        children: [requestData]
                    }).save();
                }
            })
            .then(result => resp.send(result))
            .catch(
                error => {
                    //only demonstration
                    resp.status(500);
                    resp.send(error)
                });
    }

    static requestsShowAction(req, resp) {
        const trap_id = req.params.trap_id;
        RequestTraps.find({requestUri: trap_id})
            .then(
                results => resp.send(results),
                error => {
                    //only demonstration
                    resp.status(500);
                    resp.send(error)
                }
                );
    }
}

exports.RequestTrapsController = RequestTrapsController;
