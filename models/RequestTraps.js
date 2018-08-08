const mongoose = require('mongoose');
const { Schema } = mongoose;

const RequestTrapSchema = new Schema({
    trapId: String,
    children: [new Schema({
        method: String,
        url: String,
        headers: Object,
        query: Object
    })]
});

const RequestTraps = mongoose.model('RequestTraps', RequestTrapSchema);

exports.RequestTraps = RequestTraps;
