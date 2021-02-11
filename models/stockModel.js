const mongoose = require('mongoose');

const stockModel = mongoose.Schema({

    symbol : {
        type : String,
        required : true
    },
    exch : {
        type : String,
    },
    curr : {
        type : String,
    },
    prim : {
        type : String,
    },
    delayedBid : {
        type : String,
        required : true
    },
    delayedAsk : {
        type : String,
        required : true
    },
    delayedLast : {
        type : String,
        required : true
    },
    delayedOpen : {
        type : String,
        required : true
    },
    delayedClose : {
        type : String,
        required : true
    },
    delayedHigh : {
        type : String,
        required : true
    },
    delayedLow : {
        type : String,
        required : true
    },
    delayedVolume : {
        type : String,
        required : true
    },
    mid : {
        type : String,
        required : true
    },
    percentageChange : {
        type : String,
        required : true
    },
    shortableShares : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('stocks', stockModel);