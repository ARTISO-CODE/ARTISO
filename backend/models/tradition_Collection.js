const mongoose = require('mongoose');

const tradition_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    paragraph: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const tradition_Collection = mongoose.model('tradition', tradition_Schema);

module.exports = tradition_Collection;