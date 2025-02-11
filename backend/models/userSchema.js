const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
    name:{type : String , required : true},
    email : {type: String , required:true}
})

module.exports = mongoose.model('product',productSchema);