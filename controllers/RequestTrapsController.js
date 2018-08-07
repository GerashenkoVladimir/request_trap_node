const { RequestTraps } = require('../models/RequestTraps');

class RequestTrapsController {
    static helloAction(req, resp) {
        resp.send("Hello world");
    }

    static requestTrapAction(req, resp) {
        const requestUrlFirstPart = req.url.split('?')[0].split('/')[1];
        const requestTrapUri = requestUrlFirstPart ? requestUrlFirstPart : '/';
        const requestData = {
            method: req.method,
            requestUri: req.url,
            headers: req.headers,
            queryParams: req.query,
            body: req.body
        };
        RequestTraps.find({requestUri: requestTrapUri}, function (err, results) {
            if (err) return console.error(err);
            if (results.length) {
                const request = results[0];
                request.children.push(requestData);
                request.save(function (err, request) {
                    if (err) return console.error(err);
                    resp.send(request)
                })
            } else {
                const request = new RequestTraps({
                    requestUri: requestTrapUri,
                    children: [requestData]
                });

                request.save(function (err, request) {
                        if (err) return console.error(err);
                        resp.send(request)
                    }
                )
            }
        });
    }

    static requestsShowAction(req, resp) {
        const trap_id = req.params.trap_id;
        RequestTraps.find({requestUri: trap_id}, function (err, results) {
            if (err) return console.error(err);
            resp.send(results);
        });
    }
}

exports.RequestTrapsController = RequestTrapsController;
