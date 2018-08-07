const mongoose = require('mongoose');
const {Schema} = mongoose;
const {RequestSchema} = require('./Requests');


const RequestTrapSchema = new Schema({
    requestUri: String,
    children: [RequestSchema]
});

const RequestTraps = mongoose.model('RequestTraps', RequestTrapSchema);
exports.RequestTraps = RequestTraps;
