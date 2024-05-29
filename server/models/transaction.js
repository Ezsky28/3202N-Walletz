const mongoose = require('mongoose')
const {Schema} = mongoose

const transactionSchema = new Schema({
    userID: String,
    tranType: {
        type: String,
        enum: ['expense', 'savings']
    },
    description: String,
    ammount: Number,
    tranDate: String
})

const tranModel = mongoose.model('Transaction', transactionSchema);

module.exports = tranModel;