const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    accounts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Account' 
        }],
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);