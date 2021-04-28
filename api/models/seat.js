const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Seat = new Schema({
    name: { type: String, required: true },
    user_id: { type: String, required: true},
    table_size : { type: Number, min: 1, max: 6, required: true },
    people_amt : { type: Number, min: 1, max: 8, required: true },
    floor : { type: Number, min: 1, max: 2 },
    smoking : { type: Boolean },
    time : { type: String, required: true }
})

module.exports = mongoose.model('seat', Seat);