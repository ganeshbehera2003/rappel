// models are like classes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// schema means structure of a table in database
const productSchema = new Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_image:{
        type:String,
        required:false
    },
    product_description:{
        type:String,
        required:false
    }
},{timestamps:true});

exports.Product = mongoose.model('product',productSchema);