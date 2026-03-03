const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    name: String,
    email: String,
    role: String,
    department: String
});

module.exports = mongoose.model('User', userSchema, 'User');