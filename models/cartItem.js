const mongoose = require("mongoose")
const {Shema} = mongoose;
const router = require("../routes/cartItem");

const cartItemShema = mongoose.Schema({
    quantity :{
        type : String,
        default : 0,
        required : true
    },
    totalCost :{
        type : Number ,
        required : true,
    },

})