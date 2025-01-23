const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const image_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    imageURL: { type: String, required: true },
    imageType: { type: String, required: true },
    alt: { type: String, required: true },
    used: { type: Boolean, default: false },
    whereUsed: { type: String, required: true }, // artisans OR products
    productID: { type: ObjectId, ref: 'products', required: true },
})

const image_Collection = mongoose.model('images', image_Schema);

module.exports = image_Collection;