const mongoose =require('mongoose');

//define Schema
const BlogSchema =new mongoose.Schema({
    category_name:{type:String, required:true, trim:true},
    title:{type:String, required:true, trim:true},
    description:{type:String, required:true, trim:true},
    image:{type:String,required:true , trim:true}


},{timestamps:true})


const BlogModel = mongoose.model('blog',BlogSchema);


module.exports = BlogModel ; 