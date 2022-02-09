const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    videoUrl:{
        type: String,
        required:false
    },
    featured:{
        type: Boolean,
        required:true
    },
    languages: {
        type: Array,
        required: true
    },
    }, {
    timestamps: true
})

module.exports = Video = mongoose.model('Video', VideoSchema)