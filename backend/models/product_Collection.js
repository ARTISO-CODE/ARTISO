const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const product_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, default: 0, required: true },
    old_price: { type: Number, default: 0 },
    soldRate: { type: Number, default: 0 },
    created_at: { type: Date, required: true },
    category: { type: [String], required: true },
    collection: { type: String, required: true },
    in_stock: { type: Boolean, required: true, default: true },
    details: { type: [String], required: true },
    care: { type: [String], required: true },
    artisans: [{ type: ObjectId, ref: 'artisans' }]
})

const product_Collection = mongoose.model('products', product_Schema);

module.exports = product_Collection;