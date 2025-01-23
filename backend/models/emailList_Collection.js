const mongoose = require('mongoose');

const emailList_Schema = new mongoose.Schema({
    email: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const emailList_Collection = mongoose.model('emailList', emailList_Schema);

module.exports = emailList_Collection;