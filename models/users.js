var mongoose = require('mongoose');
var AutoIncreament = require('mongoose-sequence')(mongoose);

const UserSchema = mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    ConfirmPassword : {
        type : String,
        required : true
    }
});
UserSchema.plugin(AutoIncreament, {id : 'order_seq', inc_field : 'order'});

module.exports = User = mongoose.model('User',UserSchema);
