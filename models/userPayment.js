const mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
    fullName:{
        type : String,
        require : true,
    },
    cropVariety : {
        type : String,
        require : true
    },
    cardNumberforPayment : {
        type : String,
        require : true
    },
    cardCodeForPayMent : {
        type : String,
        require : true
    },
    expiringDatForPayment : {
        type :String,
        require : true
    },
    randomNumber : {
        type : String,
        require : true
    }
});

module.exports = UserPayment = mongoose.model('UserPayment', paymentSchema);

