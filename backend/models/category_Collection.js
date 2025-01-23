const mongoose = require('mongoose');

const category_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const category_Collection = mongoose.model('category', category_Schema);

module.exports = category_Collection;