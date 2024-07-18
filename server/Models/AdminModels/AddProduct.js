const mongoose = require('mongoose')

const AddProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    discount:{
        type:String,
        trim:true,
        default:'0'
    },
    brand:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    images:{
        type:[String]
    }
},{timestamps:true})

const Product = mongoose.model('Product',AddProductSchema)
module.exports = Product