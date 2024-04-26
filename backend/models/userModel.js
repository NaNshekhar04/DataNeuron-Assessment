const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        length:10,
        required:true
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;