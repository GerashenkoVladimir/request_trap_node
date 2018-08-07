const mongoose = require('mongoose');
const {Schema} = mongoose;


const RequestSchema = new Schema({
    method: String,
    requestUri: String,
    headers: Object,
    queryParams: Object,
    // body:
});

const Requests = mongoose.model('Requests', RequestSchema);
exports.Requests = Requests;
exports.RequestSchema = RequestSchema;
