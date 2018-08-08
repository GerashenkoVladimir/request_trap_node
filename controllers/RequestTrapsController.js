const {RequestTraps} = require('../models/RequestTraps');

const helloAction = (_, resp) => resp.render('requestTrap/index');

const requestTrapAction = async ({method, url, headers, query}, resp) => {
  const trapId = url.split('?')[0].split('/')[1];
  const request = {method, url, headers, query};

  try {
    const result = await RequestTraps.findOne({trapId});
    if (result) {
      result.children.push(request);
      await result.save()
    } else {
      await RequestTraps({trapId, children: [request]}).save();
    }
    resp.render('requestTrap/requestTrap', { request });
  } catch (error) {
    resp.status(500).send(error)
  }
};

const requestsShowAction = async ({params: {trapId}}, resp) => {
  try {
    const request = await RequestTraps.find({trapId});
    resp.send(request);
  } catch (error) {
    resp.status(500).send(error)
  }
};

module.exports = {
  helloAction,
  requestTrapAction,
  requestsShowAction
};
