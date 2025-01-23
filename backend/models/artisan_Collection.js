const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const artisan_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    created_at: { type: Date, required: true },
    region: { type: String, required: true },
    experience: { type: Number, required: true },
    story: { type: String, required: true },
    products: [{ type: ObjectId, ref: 'products' }]
})

const artisan_Collection = mongoose.model('artisans', artisan_Schema);

module.exports = artisan_Collection;