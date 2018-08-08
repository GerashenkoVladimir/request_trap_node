const {RequestTraps} = require('../models/RequestTraps');

const helloAction = (_, resp) => resp.render('requestTrap/index');

const requestTrapAction = ({method, url, headers, query}, resp) => {
  const requestUri = url.split('?')[0].split('/')[1];
  const request = {
    method,
    url,
    headers,
    query
  };

  RequestTraps
    .findOne({requestUri})
    .then(result => {
      if (result) {
        result.children.push(request);
        return result.save()
      } else {
        return new RequestTraps({
          requestUri,
          children: [request]
        }).save();
      }
    })
    .then(() => resp.render('requestTrap/requestTrap', {request: request}))
    .catch(error => resp.status(500).send(error));
};

const requestsShowAction = ({params: {trapId}}, resp) => {
  RequestTraps
    .find({trapId})
    .then(results => resp.send(results))
    .catch(error => resp.status(500).send(error));
};

module.exports = {
  helloAction,
  requestTrapAction,
  requestsShowAction
};
