const mongoose =require('mongoose');

//define Schema
const imageSchema =new mongoose.Schema({
    
    title:{type:String, required:true, trim:true},
    image:{type:String, required:true, trim:true}


},{timestamps:true})


const imageModel = mongoose.model('image',imageSchema);


module.exports = imageModel ; 