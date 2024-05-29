const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    accounts: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account' 
        }],
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);