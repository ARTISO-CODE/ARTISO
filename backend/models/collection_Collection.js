const mongoose = require('mongoose');

const collection_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const collection_Collection = mongoose.model('collection', collection_Schema);

module.exports = collection_Collection;