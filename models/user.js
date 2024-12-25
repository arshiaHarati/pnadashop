const mongoose = require("mongoose")
const {Shema} = mongoose;

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
        required : true
    },
    email : {
        type : String,
        minlength : 3,
        maxlength : 320,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone : {
        type : String,
        minlength : 11,
        maxlength : 11,
        required : true,
        // match : [/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/]
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
const UserModel = mongoose.model('user',userShema)
module.exports = UserModel
