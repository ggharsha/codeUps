const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboxSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        required: true
      
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        required: true
    
    },

    messages:{
        type: Array,
        required: true
    }
    }, {
    timestamps: true
})

module.exports = Inbox = mongoose.model('Inbox', InboxSchema)