const mongoose = require('mongoose');

const message_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const message_Collection = mongoose.model('message', message_Schema);

module.exports = message_Collection;