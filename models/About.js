const mongoose = require('mongoose')


const AboutSchema = new mongoose.Schema({

    content: { type: String, required: true, trim: true }


}, { timestamps: true })


const AboutModel = new mongoose.model('about', AboutSchema);


module.exports = AboutModel;