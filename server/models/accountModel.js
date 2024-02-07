const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountSchema = new Schema({
    accountNumber: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Account', accountSchema);