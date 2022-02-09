const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    },
    languages:{
        type: Array,
        required: true
    },
    availabilities:{
        type: Array,
        required: false
    },
    photoUrl:{
        type: String,
        required: false
    }
    
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema)