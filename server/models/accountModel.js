const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
});

accountSchema.methods.withdraw = async function (amount) {
    this.balance -= amount;
    this.save();
}

accountSchema.methods.deposit = async function (amount) {
    this.balance += amount;
    this.save();
}

module.exports = mongoose.model('Account', accountSchema);