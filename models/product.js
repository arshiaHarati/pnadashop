const mongoose = require("mongoose")
const {Shema} = mongoose;
const router = require("../routes/product");

const productShema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    price :{
        type : Number ,
        required : true,
    },
    photo : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    },
    description : {
        type :  String,
        minlength : 1,
        maxLength : 400,
        required : true,
    }


})