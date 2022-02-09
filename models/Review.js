const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    studentId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    }, {
    timestamps: true
})

module.exports = Review = mongoose.model('Review', ReviewSchema)