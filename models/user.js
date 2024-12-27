const mongoose = require("mongoose")
const {Shema} = mongoose;
const bcrypt = require('bcrypt');
const router = require("../routes/user");

const userShema = mongoose.Schema({
    name :{
        type : String,
        minlength : 3,
        maxLength : 100,
        required : true
    },
    userName :{
        type : String,
        minlength : 3,
        maxLength : 200,
        required : true,
        unique: true
    },
    email : {
        type : String,
        minlength : 3,
        maxlength : 320,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    phone : {
        type : String,
        minlength : 11,
        maxlength : 11,
        required : true,
        unique: true
    },
    address : {
        type :  String,
        minlength : 3,
        maxLength : 400,

    },
    password : {
        type : String,
        minlength : 5,
        maxLength : 60,
        required : true
    }


})

userShema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);  
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
 

const UserModel = mongoose.model('user',userShema)
module.exports = UserModel
