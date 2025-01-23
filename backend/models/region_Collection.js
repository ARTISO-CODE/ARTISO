const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const region_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    knownBy: [{ type: ObjectId, ref: 'category' }],
    paragraph: { type: String, required: true },
    created_at: { type: Date, required: true }
})

const region_Collection = mongoose.model('region', region_Schema);

module.exports = region_Collection;