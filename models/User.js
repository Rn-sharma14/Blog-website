const mongoose = require('mongoose');

//define Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true }


}, { timestamps: true })


const UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel; 